import React from "react";



// @ts-ignore
export const Movie = ({movie, config}) => {
    return (<li>

        {config.images?.base_url &&
        <img src={` ${config.images.base_url}w342${movie.poster_path} `} alt={movie.title + 'Poster'}/>}

        <h3>
            {movie.title}
        </h3>
    </li>)
}