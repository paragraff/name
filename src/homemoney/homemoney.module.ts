import { Module } from '@nestjs/common';
import { AccountsModule } from "./accounts/accounts.module";
import { HomemoneyController } from "./homemoney.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'homemoneydev',
            password: 'homemoneydev',
            database: 'homemoney',
            autoLoadEntities: true,
            // synchronize: true,
        }),
        AccountsModule,
    ],
    controllers: [HomemoneyController],
    providers: []
})
export class HomemoneyModule {}
