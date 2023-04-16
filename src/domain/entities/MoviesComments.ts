import {Entity, Column} from "typeorm";
import {Base} from "./Base";

@Entity()
export class MoviesComments extends Base {
    @Column({nullable: false})
    userID!: number;

    @Column({nullable: false})
    movieID!: number;

    @Column({nullable: false, length: 250})
    content!: string;
}
