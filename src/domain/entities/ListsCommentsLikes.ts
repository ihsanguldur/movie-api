import {Entity, Column} from "typeorm";
import {Base} from "./Base";

@Entity()
export class ListsCommentsLikes extends Base {
    @Column({nullable: false})
    commentID!: number;

    @Column({nullable: false})
    listID!: number;
}
