import React from'react';
import {Input} from "./Input";
import {useState} from "react";

export const Confirm = () => {
    const [answer, setAnswer] = useState('')
    const isYes = answer === 'Да' || answer === 'да' || answer === 'Yes' || answer === 'yes'
    const isNo = answer === 'No' || answer === 'no' || answer === 'Нет' || answer === 'нет'

    return (
        <div>
            <div>
                <span>Шопинг? </span>
                <Input value={answer} setValue={setAnswer}/>
                <div>
                    {isNo && <div className='error-div'>Ты бяка</div>}
                    {isYes && <div className='success-div'>Ура!</div>}
                </div>
            </div>
        </div>
    )
}
