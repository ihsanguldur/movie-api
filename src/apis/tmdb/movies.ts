import axios from "axios";
import {logger} from "../../utils";
import config from "config";
import {defaults} from "./types";
import c from "config";

export async function getPopularMovies(language = defaults.LANGUAGE, page = defaults.PAGE, region = defaults.REGION) {
    try {
        const {data} = await axios.get(
            `${config.get("movieDB.APIUrl")}/movie/popular`,
            {
                params: {
                    language,
                    page,
                    region,
                    api_key: config.get("movieDB.APIKey")
                }
            }
        );

        return data;
    } catch (e: any) {
        logger.error(e);
        throw new Error(e);
    }

}

export async function getMovieDetails(id: number, language = defaults.LANGUAGE, appendToResponse?: string) {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/movie/${id}`,
            {
                params: {
                    api_key: config.get("movieDB.APIKey"),
                    language,
                    append_to_response: appendToResponse
                }
            }
        );

        return data;
    } catch (e: any) {
        logger.error(e);
        throw new Error(e);
    }
}

export async function getCredits(id: number, language = defaults.LANGUAGE) {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/movie/${id}/credits`,
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

export async function getImages(id: number, language = "en") {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/movie/${id}/images`,
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

export async function getKeywords(id: number) {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/movie/${id}/keywords`,
            {
                params: {
                    api_key: config.get("movieDB.APIKey")
                }
            }
        );

        return data;
    } catch (e: any) {
        logger.error(e);
        throw new Error(e);
    }
}

export async function getRecommendations(id: number, language = defaults.LANGUAGE, page = defaults.PAGE) {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/movie/${id}/recommendations`,
            {
                params: {
                    api_key: config.get("movieDB.APIKey"),
                    language,
                    page
                }
            }
        );

        return data;
    } catch (e: any) {
        logger.error(e);
        throw new Error(e);
    }
}

export async function getSimilarMovies(id: number, language = defaults.LANGUAGE, page = defaults.PAGE) {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/movie/${id}/similar`,
            {
                params: {
                    api_key: config.get("movieDB.APIKey"),
                    language,
                    page
                }
            }
        );

        return data;
    } catch (e: any) {
        logger.error(e);
        throw new Error(e);
    }
}

export async function getVideos(id: number, language = "en-US") {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/movie/${id}/videos`,
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

export async function getTopRatedMovies(language = defaults.LANGUAGE, page = defaults.PAGE, region = defaults.REGION) {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/movie/top_rated`,
            {
                params: {
                    api_key: config.get("movieDB.APIKey"),
                    language,
                    page,
                    region
                }
            }
        );

        return data;
    } catch (e: any) {
        logger.error(e);
        throw new Error(e);
    }
}

export async function getUpcomingMovies(language = defaults.LANGUAGE, page = defaults.PAGE, region = defaults.REGION) {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/movie/upcoming`,
            {
                params: {
                    api_key: config.get("movieDB.APIKey"),
                    language,
                    page,
                    region
                }
            }
        );

        return data;
    } catch (e: any) {
        logger.error(e);
        throw new Error(e);
    }
}

export async function getWatchProviders(id: number) {
    try {
        const {data} = await axios.get(`${config.get("movieDB.APIUrl")}/movie/${id}/watch/providers`,
            {
                params: {
                    api_key: config.get("movieDB.APIKey")
                }
            }
        );

        return data;
    } catch (e: any) {
        logger.error(e);
        throw new Error(e);
    }
}

