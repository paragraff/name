import {Controller, Get, Param} from '@nestjs/common';

@Controller('homemoney/accounts/')
export class AccountsController {
    @Get()
    getBody(): string {
        return 'this controller will return the homemoney accounts page'
    }
}
