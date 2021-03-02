import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomemoneyController } from './homemoney/homemoney.controller';
import { AccountsController } from './homemoney/accounts/accounts.controller';
import {AccountsService} from "./homemoney/accounts/accounts.service";

@Module({
  imports: [],
  controllers: [AppController, HomemoneyController, AccountsController],
  providers: [AppService, AccountsService],
})
export class AppModule {}
