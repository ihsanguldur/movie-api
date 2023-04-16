import {Entity, Column} from "typeorm";
import {Base} from "./Base";

@Entity()
export class WhereToWatch extends Base {
    @Column({nullable: false})
    movieID!: number;

    @Column()
    netflix!: string;

    @Column()
    amazonPrime!: string;

    @Column()
    disneyPlus!: string;
}
