import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export const API_KEY = '?api_key=88d152960bc5347471fe0bb0965e6bf9'


export const movieApi = {
    getMovie() {
        return instance.get(`discover/movie${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    },
    getConfig() {
        return instance.get(`configuration${API_KEY}`)
    },
    getUpcoming() {
        return instance.get(`movie/upcoming${API_KEY}&language=en-US&page=1`)
    }
}

