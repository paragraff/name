import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './interfaces/account.interface'
import { CreateAccountDto } from "./dto/account.dto";

@Controller({host:'homemoney.kovtiukh.name', path:'/accounts/'})
export class AccountsController {
    constructor(private accountsService: AccountsService) {}

    @Get()
    getAll(): Account[] {
        return this.accountsService.findAll()
    }
    @Get(':id')
    getAccount(@Param('id') id: number): Account {
        return this.accountsService.getById(id)
    }

    @Post()
    createAccount(@Body() accountDto: CreateAccountDto) {
        this.accountsService.create(accountDto)
    }
}
