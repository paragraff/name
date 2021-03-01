import { Controller, Get } from '@nestjs/common';

@Controller('homemoney')
export class HomemoneyController {
    @Get()
    getBody(): string {
        return 'this controller will return the homemoney start page'
    }
}
