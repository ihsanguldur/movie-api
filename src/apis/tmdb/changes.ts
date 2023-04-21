import axios from "axios";
import config from "config";
import {logger} from "../../utils";
import {defaults} from "./types";

export async function getChangedMovies(page = defaults.PAGE) {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/movie/changes`,
            {
                params: {
                    page,
                    api_key: config.get("movieDB.APIKey"),
                }
            }
        );

        return data;
    } catch (e: any) {
        logger.error(e);
        throw new Error(e);
    }
}
