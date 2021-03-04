import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import IEnvConfigInterface from './interfaces/env-config.interface';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
class ConfigService {
    public readonly envConfig: IEnvConfigInterface;

    constructor(filePath: string) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    }

    public getTypeORMConfig(): TypeOrmModuleOptions {
        const type: any = this.envConfig.TYPEORM_CONNECTION;
        return {
            type,
            host: this.envConfig.TYPEORM_HOST,
            username: this.envConfig.TYPEORM_USERNAME,
            password: this.envConfig.TYPEORM_PASSWORD,
            database: this.envConfig.TYPEORM_DATABASE,
            port: Number.parseInt(this.envConfig.TYPEORM_PORT, 10),
            autoLoadEntities: true,
            logging: false,
        };
    }
}

export default ConfigService;