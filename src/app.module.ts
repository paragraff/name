import * as dotenv from 'dotenv';
import { dotEnvOptions } from './config/dotenv-options';
dotenv.config(dotEnvOptions);
// imports above this line should head first
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomemoneyModule } from './homemoney/homemoney.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [HomemoneyModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
