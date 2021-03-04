import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ConfigService from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig: ConfigService = app.get('ConfigService')
  await app.listen(appConfig.envConfig.EXPRESS_PORT);
}
bootstrap();
