import { Controller, Get } from '@nestjs/common';

@Controller({host: process.env.HOMEMONEY_HOST})
export class HomemoneyController {
    @Get()
    index(): string {
        return 'this controller will return the homemoney start page'
    }
    @Get('profile')
    getProfile(): string {
        return 'test'
    }
}
