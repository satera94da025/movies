import React from 'react';
import {Movie} from "../Movie";
import {movieType} from "../MoviesList";

type PropsType = {
    filter: string
    setFilter: (value: string) => void
    movies: Array<movieType>
    config?: {
        images: { base_url?: string }
    }
}

export const BaseMovie = (props: PropsType) => {
    return (
        <div>
            <ul className={'movies-list'}>
                {props.movies.filter((movie: { title: string }) =>
                    movie.title.toLowerCase().includes(props.filter.toLowerCase())
                ).map((movie: movieType) =>
                    <Movie key={movie.id} movie={movie} config={props.config}/>
                )}
            </ul>
        </div>
    );
};
