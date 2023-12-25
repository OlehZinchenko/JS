import React from'react';
import {Input} from "./Input";
import {useState} from "react";

export const Confirm = () => {
    const [answer, setAnswer] = useState('')
    const handleClick = (event, answer) => {
        // console.log(answer)
        if (answer === '')
            return null
        if (answer !== 'Да' || answer!== 'да' || answer!== 'Yes' || answer!== 'yes')
            return <div className='error-div'>Ты бяка</div>
        return <div className='success-div'>Ура!</div>
    }

    return (
        <div>
            <div>
                <span>Шопинг? </span>
                <Input value={answer} setValue={setAnswer}/>
                <button onClick={event => handleClick(event, answer)}>Check number</button>
                {/*{robotFunc(answer)}*/}
            </div>
        </div>
    )
}
