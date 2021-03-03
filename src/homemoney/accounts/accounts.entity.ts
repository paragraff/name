import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'accounts'})
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @Column()
    // group: number;
}