import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ConfigService from './config/config.service';
import {NotFoundExceptionFilter, ServeStaticExceptionFilter } from "./app.not-found.exception";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig: ConfigService = app.get('ConfigService')

app.useGlobalFilters(new NotFoundExceptionFilter(), new ServeStaticExceptionFilter());
  await app.listen(appConfig.envConfig.EXPRESS_PORT);
}
bootstrap();
