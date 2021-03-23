import * as dotenv from 'dotenv';
import { dotEnvOptions } from './config/dotenv-options';
dotenv.config(dotEnvOptions);
// imports above this line should head first
import { join } from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomemoneyModule } from './homemoney/homemoney.module';
import { ConfigModule } from './config/config.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
      ServeStaticModule.forRoot({
          rootPath: join(__dirname, '..', 'static'),
      }),
      HomemoneyModule,
      ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
