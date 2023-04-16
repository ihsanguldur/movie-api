import {Entity, Column} from "typeorm";
import {Base} from "./Base";

@Entity()
export class ListsComments extends Base {
    @Column({nullable: false})
    userID!: number;

    @Column({nullable: false})
    listID!: number;

    @Column({nullable:false, length: 250})
    content!: string;
}
