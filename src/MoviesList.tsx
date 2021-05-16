import React, {useEffect, useState} from "react";
import {movieApi} from "./api/movieApi";
import {UpcomingMovie} from "./sortMovie/upcomingMovie";
import {BaseMovie} from "./sortMovie/baseMovie";
import {Filter} from "./Filter";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';


export type movieType = {
    id: number
    poster_path: string
    title: string

}


export const MoviesList = () => {

    const [filter, setFilter] = useState('')
    const [movies, setMovies] = useState<Array<movieType>>([])
    const [config, setConfig] = useState<any>({})
    const [upcomingMovies, setUpcomingMovies] = useState<Array<movieType>>([])
    const [showBase, setShowBase] = useState(true)


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
        </ButtonGroup>
        <Filter filter={filter} setFilter={setFilter}/>
        {showBase && <BaseMovie filter={filter} setFilter={setFilter} config={config} movies={movies}/>}
        {!showBase &&
        <UpcomingMovie upcomingMovies={upcomingMovies} filter={filter} setFilter={setFilter} config={config}/>}
    </div>)
}


