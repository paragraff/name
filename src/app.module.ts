import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomemoneyModule } from './homemoney/homemoney.module';

@Module({
  imports: [HomemoneyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
