import { Module } from '@nestjs/common';
import { AccountsModule } from "./accounts/accounts.module";
import { HomemoneyController } from "./homemoney.controller";

@Module({
    imports: [AccountsModule],
    controllers: [HomemoneyController],
    providers: []
})
export class HomemoneyModule {}
