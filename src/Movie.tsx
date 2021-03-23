import React from "react";

type MovieType = {
    name: string
}

export const Movie = (props: MovieType) => {
    return <li>{props.name}</li>
}