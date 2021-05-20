import React, {useEffect, useState} from "react";
import {movieApi} from "./api/movieApi";
import {UpcomingMovie} from "./sortMovie/upcomingMovie";
import {BaseMovie} from "./sortMovie/baseMovie";
import {Filter} from "./Filter";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import CircularIndeterminate from "./materialUI/preloader";




export type movieType = {
    id: number
    poster_path: string
    title: string
    status: TaskStatuses
}

export enum TaskStatuses {
    New,
    InProgress,
    Completed,
    Draft
}

export const MoviesList = () => {

    const [filter, setFilter] = useState('')
    const [movies, setMovies] = useState<Array<movieType>>([])
    const [config, setConfig] = useState<any>({})
    const [upcomingMovies, setUpcomingMovies] = useState<Array<movieType>>([])
    const [showBase, setShowBase] = useState(true)
    const [preloader, setPreloader] = useState(true)

    const showFavourites = () => {
        setMovies([...movies.filter(m => m.status === TaskStatuses.Completed )])
    }

    const changeStatus = (movieId: number, status: TaskStatuses) => {
        let movie = movies.find(m => m.id === movieId)
        if(movie){
            movie.status = status
        }
        setMovies([...movies])
    }

    const getUpcoming = async () => {
        try {
            setPreloader(true)
            const res = await movieApi.getUpcoming()
            setUpcomingMovies(res.data.results)
            setPreloader(false)
        } catch (e) {
            console.error(e)
        }
    }


    const getMovie = async () => {
        try {
            setPreloader(true)
            const res = await movieApi.getMovie()
            setMovies(res.data.results)
            setPreloader(false)
        } catch (e) {
            console.error(e)
        }
    }

    const getConfig = async () => {
        try {
            setPreloader(true)
            const res = await movieApi.getConfig()
            setConfig(res.data)
            setPreloader(false)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getMovie().then(() => {
        })
        getConfig().then(() => {
        })
        getUpcoming().then(() => {
        })
    }, [])


    return (<div>
        <ButtonGroup disableElevation variant="contained" color="secondary">
            <Button onClick={() => setShowBase(true)}>Base</Button>
            <Button onClick={() => setShowBase(false)}>Upcoming</Button>
            <Button onClick={showFavourites}>showFavourites</Button>
        </ButtonGroup>
        <Filter filter={filter} setFilter={setFilter}/>
        {preloader && <CircularIndeterminate/> }
        {showBase && <BaseMovie filter={filter} setFilter={setFilter} config={config} movies={movies} changeStatus={changeStatus}/>}
        {!showBase &&
        <UpcomingMovie upcomingMovies={upcomingMovies} filter={filter} setFilter={setFilter} config={config} changeStatus={changeStatus}/>}
    </div>)
}


