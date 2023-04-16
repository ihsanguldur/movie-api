import {Column, Entity} from "typeorm";
import {Base} from "./Base";

@Entity()
export class Movies extends Base {
    @Column({nullable: false})
    name!: string;

    @Column()
    image!: string;

    @Column()
    fragment!: string;

    @Column({length: 250})
    information!: string;

    @Column({default: 0})
    rate!: number;

    @Column({default: 0})
    IMDBRate!: number;

    @Column()
    releaseDate!: Date;

    @Column()
    shortUrl!: string;

    @Column()
    cast!: string;

    @Column()
    director!: string;
}
