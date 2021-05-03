import React, {ChangeEvent} from "react";

type FilterType = {
    filter: string
    setFilter: (value: string) => void
}

export const Filter = (props: FilterType) => {

    const movieFilter = (e: ChangeEvent<HTMLInputElement>) => props.setFilter(e.target.value)

    return <label>
        Search film:<input value={props.filter} onChange={movieFilter}/>
    </label>
}