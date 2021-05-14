import React, {useEffect, useState} from "react";
import {Movie} from "./Movie";
import {Filter} from "./Filter";
import {movieApi} from "./api/movieApi";


export type movieType = {
    id: number
    poster_path: string
    title: string

}


export const MoviesList = () => {

    const [filter, setFilter] = useState('')
    const [movies, setMovies] = useState([])
    const [config, setConfig] = useState<any>({})
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [showUpcoming, setShowUpcoming] = useState(false)


    const getUpcoming = async () => {
        try {
            const res = await movieApi.getUpcoming()

            setUpcomingMovies(res.data.results)
        } catch (e) {
            console.error(e)
        }
    }


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
        getUpcoming()
    }, [])


    return (<div>
        <button onClick={() => setShowUpcoming(true)}>upcoming films</button>

        {showUpcoming && <>
            <Filter filter={filter} setFilter={setFilter}/>
            <ul className={'movies-list'}>
                {upcomingMovies.filter((movie: { title: string }) =>
                    movie.title.toLowerCase().includes(filter.toLowerCase())
                ).map((movie: movieType) =>
                    <Movie key={movie.id} movie={movie} config={config}/>
                )}
            </ul>
        </>}


        {!showUpcoming && <> <Filter filter={filter} setFilter={setFilter}/>
            <ul className={'movies-list'}>
                {movies.filter((movie: { title: string }) =>
                    movie.title.toLowerCase().includes(filter.toLowerCase())
                ).map((movie: movieType) =>
                    <Movie key={movie.id} movie={movie} config={config}/>
                )}
            </ul>
        </>}
    </div>)
}