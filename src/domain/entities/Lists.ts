import {Entity, Column} from "typeorm";
import {Base} from "./Base";

@Entity()
export class Lists extends Base {
    @Column({nullable: false, length: 35})
    name!: string;

    @Column({length: 250})
    information!: string;

    @Column({nullable: false})
    userID!: number;

    @Column({default: false})
    isPrivate!: boolean;
}
