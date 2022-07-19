const BaseURL = 'https://api.themoviedb.org/3'
const API_KEY = 'api_key=7a2105aac93303bf26e6ba1aae712e5b'
const API_URL = '/discover/movie?sort_by=popularity.desc&' + API_KEY
const API_URL_2 ='/trending/all/day?' + API_KEY
const API_URL_3 =  `/tv/popular?${API_KEY}&language=en-US&page=1`
export default {
    //#region  Popular Films Api Settings
    BaseURL: BaseURL,
    API_KEY: API_KEY,
    API_URL: API_URL,
    //#endregion

    //#region All Days Film Api Settings
    API_URL_2: API_URL_2,
    //#endregion

    //#region getPopularTvSeries
    API_URL_3:API_URL_3
    //#endregion
}