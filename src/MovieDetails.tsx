import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

interface ParamsType {
    id: string
}

const MovieDetails = () => {
    const BASE_URL = 'https://api.themoviedb.org/3/movie/'
    const API_KEY = '?api_key=88d152960bc5347471fe0bb0965e6bf9'
    const IMAGE_URL = 'https://image.tmdb.org/t/p/'
    const BACKDROP_SIZE = 'original'
    const POSTER_SIZE = 'w342'
    const [movie, setMovie] = useState<any>({})

    const {id} = useParams<ParamsType>()

    const getMovie = async () => {
        try {
            const res = await fetch(`${BASE_URL}${id}${API_KEY}`)
            const newMovie = await res.json()
            setMovie(newMovie)
        } catch (e) {
            console.error(e)
        }

    }

    useEffect(() => {
        getMovie()
    }, [id])

    return (
        <div>
            <img className={'backdrop'} src={`${IMAGE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
                 alt={`${movie.title}Backdrop`}/>
            <div className={'detail-details'}>
                <img className={'detail-poster'} src={`${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`}
                     alt={`${movie.title}Poster`}/>
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <ul>
                        {movie.genres?.map((genre: { name: string }) => {
                            return <li>
                                {genre.name}
                            </li>
                        })}
                    </ul>
                </div>

            </div>


        </div>
    );
};

export default MovieDetails;