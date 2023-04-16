import {Entity, Column} from "typeorm";
import {Base} from "./Base";

@Entity()
export class UsersMovies extends Base {
    @Column({nullable: false})
    userID!: number;

    @Column({nullable: false})
    movieID!: number;

    @Column({default: false})
    isWatched!: boolean;

    @Column()
    review!: string;

    @Column()
    rate!: number;
}
