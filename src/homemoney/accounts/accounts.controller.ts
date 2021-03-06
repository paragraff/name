import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { AccountsService } from './accounts.service';
// import { Account } from './interfaces/account.interface'
// import { CreateAccountDto } from "./dto/account.dto";
import { Account as AccountEntity} from './accounts.entity'

@Controller({host: process.env.HOMEMONEY_HOST, path:'/accounts/'})
export class AccountsController {
    constructor(private accountsService: AccountsService) {}

    @Get()
    async getAll(): Promise<AccountEntity[]> {
        return this.accountsService.findAll()
    }
    @Get(':id')
    getAccount(@Param('id', ParseIntPipe) id: number): void {
        return this.accountsService.getById(id)
    }

    // @Post()
    // createAccount(@Body() accountDto: CreateAccountDto) {
    //     this.accountsService.create(accountDto)
    // }
}
