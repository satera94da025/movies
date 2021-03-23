import React, {useState} from "react";

export const Accordion = () => {

    const [isToggled, setIsToggled] = useState(true)

    const toggleTrue = () => {
        setIsToggled(true)
    }
    const toggleFalse = () => {
        setIsToggled(false)
    }

    return (<div>
        {isToggled && <h1>toggled</h1>  }
        <button onClick={toggleTrue}>показать</button>
        <button onClick={toggleFalse}>скрыть</button>
    </div>)
}