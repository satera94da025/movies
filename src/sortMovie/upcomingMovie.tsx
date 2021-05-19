import React from 'react';
import {Movie} from "../Movie";
import {movieType, TaskStatuses} from "../MoviesList";

type PropsType = {
    filter: string
    setFilter: (value: string) => void
    upcomingMovies: Array<movieType>
    config?: {
        images: { base_url?: string }
    }
    changeStatus: (movieId: number, status: TaskStatuses) => void
}

export const UpcomingMovie = (props: PropsType) => {
    return (
        <div>
            <ul className={'movies-list'}>
                {props.upcomingMovies.filter((movie: { title: string }) =>
                    movie.title.toLowerCase().includes(props.filter.toLowerCase())
                ).map((movie: movieType) =>
                    <Movie key={movie.id} movie={movie} config={props.config} changeStatus={props.changeStatus}/>
                )}
            </ul>
        </div>
    );
};

