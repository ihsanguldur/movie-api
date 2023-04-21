import axios from "axios";
import config from "config";
import {logger} from "../../utils";
import {defaults} from "./types";

export async function getGenres(language = defaults.LANGUAGE) {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/genre/movie/list`,
            {
                params: {
                    api_key: config.get("movieDB.APIKey"),
                    language
                }
            }
        );

        return data;
    } catch (e: any) {
        logger.error(e);
        throw new Error(e);
    }
}
