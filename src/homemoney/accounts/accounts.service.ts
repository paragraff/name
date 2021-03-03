import { Injectable,  } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Account } from './accounts.entity'

@Injectable()
export class AccountsService {

    constructor(
        @InjectRepository(Account)
        private readonly usersRepository: Repository<Account>,
    ) {}

    findAll(): Promise<Account[]> {
        return this.usersRepository.find();
    }

    getById(id: number): void {
    }
}