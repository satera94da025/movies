import React, {useEffect, useState} from "react";
import {Movie} from "./Movie";
import {Filter} from "./Filter";

export const MoviesList = () => {

    const [filter, setFilter] = useState('')
    const [movies, setMovies] = useState([])
    const [config, setConfig] = useState({})

    const API = 'https://api.themoviedb.org/3/discover/movie?api_key=88d152960bc5347471fe0bb0965e6bf9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'

    const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key=88d152960bc5347471fe0bb0965e6bf9'

    const getMovie = async () => {
        try {
            const res = await fetch(API)
            const movies = await res.json()
            setMovies(movies.results)
        } catch (e) {
            console.error(e)
        }

    }

    const getConfig = async () => {
        try {
            const res = await fetch(CONFIG_URL)
            const config = await res.json()
            setConfig(config)
        } catch (e) {
            console.error(e)
        }

    }

    useEffect(() => {
        getMovie()
        getConfig()
    }, [])

    return (<div>
        <Filter filter={filter} setFilter={setFilter}/>
        <ul className={'movies-list'}>
            {movies.filter((movie: any) =>
                movie.title.toLowerCase().includes(filter.toLowerCase())
            ).map((movie: any) =>
                <Movie key={movie.id} movie={movie} config={config}/>
            )}
        </ul>
    </div>)
}