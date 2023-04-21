import axios from "axios";
import config from "config";
import {logger} from "../../utils";
import {defaults} from "./types";

export async function discoverMovies(
    language = defaults.LANGUAGE,
    page = defaults.PAGE,
    region = defaults.REGION,
    sortBy = defaults.SORT_BY,
    includeAdult = defaults.INCLUDE_ADULT,
    releaseDateGte = defaults.RELEASE_DATE_GTE,
    releaseDateLte = defaults.RELEASE_DATE_LTE,
    year?: number,
    withCast?: string,
    withCrew?: string,
    withCompanies?: string,
    withGenres?: string,
    withKeywords?: string,
) {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/discover/movie`,
            {
                params: {
                    api_key: config.get("movieDB.APIKey"),
                    language,
                    page,
                    region,
                    sort_by: sortBy,
                    include_adult: includeAdult,
                    "release_date.gte": releaseDateGte,
                    "release_date.lte": releaseDateLte,
                    year,
                    with_cast: withCast,
                    with_crew: withCrew,
                    with_companies: withCompanies,
                    with_genres: withGenres,
                    with_keywords: withKeywords
                }
            }
        );

        return data;
    } catch (e: any) {
        logger.error(e);
        throw new Error(e);
    }
}
