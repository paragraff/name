import { Controller, Get } from '@nestjs/common';

@Controller({host:'homemoney.kovtiukh.name'})
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
