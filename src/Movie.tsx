import React from "react";
import {Link} from "react-router-dom";



// @ts-ignore
export const Movie = ({movie, config}) => {
    return (<li>
        <Link to={`/movie/${movie.id}`}>
            {config.images?.base_url &&
            <img src={` ${config.images.base_url}w342${movie.poster_path} `} alt={`${movie.title}Poster`}/>}


        </Link>


    </li>)
}