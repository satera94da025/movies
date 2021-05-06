import React, {useEffect, useState} from "react";
import {Movie} from "./Movie";
import {Filter} from "./Filter";
import {movieApi} from "./api/movieApi";



export const MoviesList = () => {

    const [filter, setFilter] = useState('')
    const [movies, setMovies] = useState([])
    const [config, setConfig] = useState({})


    const getMovie = async () => {
        try {
            const res = await movieApi.getMovie()
            setMovies(res.data.results)
        } catch (e) {
            console.error(e)
        }

    }


    const getConfig = async () => {
        try {
            const res = await movieApi.getConfig()
            setConfig(res.data)
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
            {movies.filter((movie: { title: string }) =>
                movie.title.toLowerCase().includes(filter.toLowerCase())
            ).map((movie: { poster_path: string, id: number }) =>
                <Movie key={movie.id} movie={movie} config={config}/>
            )}
        </ul>
    </div>)
}