import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomemoneyController } from './homemoney/homemoney.controller';
import { AccountsController } from './homemoney/accounts/accounts.controller';
import { AccountController } from './homemoney/accounts/account.controller';

@Module({
  imports: [],
  controllers: [AppController, HomemoneyController, AccountsController, AccountController],
  providers: [AppService],
})
export class AppModule {}
