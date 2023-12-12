import React from "react";
import {Input} from "./Input";
import {useState} from "react";

export const Calculator = () => {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [result, setResult] = useState(0)

    const Calc = () => {
        setResult(Math.floor(number1/number2))
    }

    return (
        <div>
            <div>
                <span>Please enter first number: </span>
                <Input value={number1} setValue={setNumber1}/>
            </div>
            <div>
                <span>Please enter second number: </span>
                <Input value={number2} setValue={setNumber2}/>
            </div>
            <button onClick={Calc}>Calculate</button>
            <div>
                <span>Your floor result is: {result}</span>
            </div>
        </div>
    )
}