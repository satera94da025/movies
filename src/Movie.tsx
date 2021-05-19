import React from "react";
import {Link} from "react-router-dom";
import {movieType, TaskStatuses} from "./MoviesList";
import Checkbox from '@material-ui/core/Checkbox';

type PropsType = {
    movie: movieType
    config?: {
        images: { base_url?: string }
    }
    changeStatus: (movieId: number, status: TaskStatuses) => void

}






export const Movie = (props: PropsType) => {



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(props.movie.id,  event.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New );
    };





    return <li>
        <Link to={`/movie/${props.movie.id}`}>
            {props.config?.images?.base_url &&
            <img src={` ${props.config.images.base_url}w342${props.movie.poster_path} `}
                 alt={`${props.movie.title}Poster`}  />}
        </Link>
       Add to favourites <Checkbox
            checked={props.movie.status === TaskStatuses.Completed}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />

    </li>
}