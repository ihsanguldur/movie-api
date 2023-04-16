import {Entity, Column} from "typeorm";
import {Base} from "./Base";

@Entity()
export class UsersLists extends Base {
    @Column({nullable: false})
    userID!: number;

    @Column({nullable: false})
    listID!: number;

    @Column({default: false})
    isLiked!: boolean;
}
