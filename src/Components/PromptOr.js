import React from'react';
import {Input} from "./Input";
import {useState} from "react";

export const PromptOr = () => {
    const [year, setYear] = useState(0)
    const [result, setResult] = useState(0)
    const currentYear = new Date().getFullYear();
    const Calc = () => {
        setResult(currentYear - year)
    }

    function  errorFunc (age) {
        if (!age || age === 0){
            return <div className='error-div'>Error, year isn't set</div>
        }
        return null;
    }

    return (
        <div>
            <div>
                <span>Enter your age: </span>
                <Input value={year} setValue={setYear}/>
                {errorFunc(year)}
            </div>
            <div>
                <span>Current year: {currentYear}</span>
            </div>
            <button onClick={Calc}>Calculate</button>
            <div>
                {year > currentYear ? <div className={'fail'}> Please, enter year, that less or equal that
                    current </div> : <span>Your born year is: {result}</span>}
            </div>
        </div>
    )
}
