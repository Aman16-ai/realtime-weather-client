import { WEATHER_API, WEATHER_SUMMARY_API } from "./API"


export const lastestWeatherOfCityService = async (query) => {
    const url = WEATHER_API + query
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const getCitySummaryDataService = async (query) => {
    const url = WEATHER_SUMMARY_API + query
    const response = await fetch(url)
    const data = await response.json()
    return data
}