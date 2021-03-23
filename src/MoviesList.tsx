import React, {ChangeEvent, useState} from "react";
import {Movie} from "./Movie";

export const MoviesList = () => {

    const [filter, setFilter] = useState('')

    const movies = [
        {name: 'SuperMan'},
        {name: 'BatMan'},
        {name: 'SpiderMan'}
    ]

    const movieFilter = (e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)

    return (<div>
        Search film:<input value={filter} onChange={movieFilter}/>
        <ul>
            {movies.filter((el) =>
                el.name.toLowerCase().includes(filter.toLowerCase())
            ).map((el) =>
                <Movie key={el.name} name={el.name}/>
            )}
        </ul>
    </div>)
}