import { Module } from '@nestjs/common';
import { AccountsModule } from "./accounts/accounts.module";
import { HomemoneyController } from "./homemoney.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import {ConfigModule} from "../config/config.module";
import ConfigService from '../config/config.service'

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => configService.getTypeORMConfig(),
        }),
        AccountsModule,
    ],
    controllers: [HomemoneyController],
    providers: []
})
export class HomemoneyModule {}
