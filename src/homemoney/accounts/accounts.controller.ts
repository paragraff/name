import {Controller, Get} from '@nestjs/common';

@Controller({host:'homemoney.kovtiukh.name', path:'/accounts/'})
export class AccountsController {
    @Get()
    getBody(): string {
        return 'this controller will return the homemoney accounts page'
    }
}
