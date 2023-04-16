import {Entity, PrimaryGeneratedColumn, DeleteDateColumn, UpdateDateColumn, CreateDateColumn} from "typeorm";

@Entity()
export class Base {
    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;
}
