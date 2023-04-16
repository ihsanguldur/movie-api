import {Entity, Column} from "typeorm";
import {Base} from "./Base";

@Entity()
export class MoviesCommentsLikes extends Base {
    @Column({nullable: false})
    commentID!: number;

    @Column({nullable: false})
    moviesID!: number;
}
