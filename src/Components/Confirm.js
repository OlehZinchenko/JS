import React from'react';
import {Input} from "./Input";
import {useState} from "react";

export const Confirm = () => {
    const [answer, setAnswer] = useState('')

    function  robotFunc (answer) {
        if (answer === '')
            return null
        if (answer !== 'Да' || answer!== 'да' || answer!== 'Yes' || answer!== 'yes')
            return <div className='error-div'>Ты бяка</div>
        else
            return <div className='success-div'>Ура!</div>
    }

    return (
        <div>
            <div>
                <span>Шопинг? </span>
                <Input value={answer} setValue={setAnswer}/>
                <button onClick={robotFunc(answer)}>Check number</button>
                {/*{robotFunc(answer)}*/}
            </div>
        </div>
    )
}
