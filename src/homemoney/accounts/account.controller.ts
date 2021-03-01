import {Controller, Get, Param} from '@nestjs/common';

@Controller('homemoney/accounts/:id/')
export class AccountController {
    @Get()
    getBody(@Param('id') id): string {
        return 'this controller will return the homemoney accounts page ' + id
    }
}
