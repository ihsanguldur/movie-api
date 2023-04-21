import {functions} from "../../utils";

export const defaults = {
    LANGUAGE: "tr-TR",
    PAGE: 1,
    REGION: "TR",
    SORT_BY: "popularity.desc",
    INCLUDE_ADULT: true,
    RELEASE_DATE_GTE: "1895-12-28",
    RELEASE_DATE_LTE: functions.getCurrentDate()
}
