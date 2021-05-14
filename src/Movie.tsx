import React from "react";
import {Link} from "react-router-dom";
import {movieType} from "./MoviesList";

type PropsType = {
    movie: movieType
    config?: {
        images: { base_url?: string }
    }
}


export const Movie = (props: PropsType) => {
    return <li>
        <Link to={`/movie/${props.movie.id}`}>
            {props.config?.images?.base_url &&
            <img src={` ${props.config.images.base_url}w342${props.movie.poster_path} `}
                 alt={`${props.movie.title}Poster`}/>}


        </Link>


    </li>
}