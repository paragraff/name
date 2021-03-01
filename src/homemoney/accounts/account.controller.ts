import {Controller, Get, Param} from '@nestjs/common';

@Controller({host: 'homemoney.kovtiukh.name', path: '/accounts/:id/'})
export class AccountController {
    @Get()
    getBody(@Param('id') id): string {
        return 'this controller will return the homemoney accounts page ' + id
    }
}
