import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomemoneyController } from './homemoney/homemoney.controller';

@Module({
  imports: [],
  controllers: [AppController, HomemoneyController],
  providers: [AppService],
})
export class AppModule {}
