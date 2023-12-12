import React from "react";
import {Input} from "./Input";
import {useState} from "react";

const options = [
    'Celsius', 'Fahrenheit'
];

export const Temperature = () => {
    const [temp, setTemp] = useState(0)
    const [resultTemp, setResultTemp] = useState(0)
    let [flag, setFlag] = useState('')

    const CalcCelsius = () => {
        setFlag(flag=options[0])
        setResultTemp(temp*(5/9)-32)
    }
    const CalcFahrenheit = () => {
        setFlag(flag=options[1])
        setResultTemp(temp*(9/5)+32)
    }

    return (
        <div>
            <div>
                <span>Please enter a temperature: </span>
                <Input value={temp} setValue={setTemp}/>
            </div>
            <button onClick={CalcCelsius}>Calculate in Celsius</button>
            <button onClick={CalcFahrenheit}>Calculate in Fahrenheit</button>
            <div>
                {flag === 'Celsius' ? <span>Your value in Celsius is: {resultTemp}</span> : <span>Your value in Fahrenheit is: {resultTemp}</span>}
            </div>
        </div>
    )
}