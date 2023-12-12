import React from "react";
import {Input} from "./Input";
import {useState} from "react";

export const Entrance = () => {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [number3, setNumber3] = useState(0)
    const [result, setResult] = useState(0)

    const Calc = () => {
        setResult((number3-1)%(number1*number2)/number2+1)
    }

    return (
        <div>
            <div>
                <span>Please enter floors number: </span>
                <Input value={number1} setValue={setNumber1}/>
            </div>
            <div>
                <span>Please enter number of flats per floor: </span>
                <Input value={number2} setValue={setNumber2}/>
            </div>
            <div>
                <span>Please enter number of flat: </span>
                <Input value={number3} setValue={setNumber3}/>
            </div>
            <button onClick={Calc}>Calculate</button>
            <div>
                <span>Your floor result is: {result}</span>
            </div>
        </div>
    )
}