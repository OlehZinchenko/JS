import React from "react";
import {Input} from "./Input";
import {useState} from "react";

export const Exchange = () => {
    const [number1, setNumber1] = useState(0)
    const [rate, setRate] = useState(36)
    const [result, setResult] = useState(0)

    const Calc = () => {
        setResult((number1/rate).toFixed(2))
    }

    return (
        <div>
            <div>
                <span>Please enter UAH value for exchange: </span>
                <Input value={number1} setValue={setNumber1}/>
            </div>
            <div>
                <span>Rate is: {rate}$ / 1 UAH</span>
            </div>
            <button onClick={Calc}>Calculate</button>
            <div>
                <span>Your exchange value is: ${result} </span>
            </div>
        </div>
    )
}