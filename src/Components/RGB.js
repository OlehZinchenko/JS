import React from "react";
import {Input} from "./Input";
import {useState} from "react";

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

export const RGB = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const [result, setResult] = useState('')


    const Calc = () => {
        setResult(rgbToHex(red, green, blue))
    }

    return (
        <div>
            <div>
                <span>Please enter RED value: </span>
                <Input value={red} setValue={setRed}/>
            </div>
            <div>
                <span>Please enter GREEN value: </span>
                <Input value={green} setValue={setGreen}/>
            </div>
            <div>
                <span>Please enter BLUE value: </span>
                <Input value={blue} setValue={setBlue}/>
            </div>
            <button onClick={Calc}>Calculate</button>
            <div>
                <span>Your RGB HEX color is: {result} </span>
            </div>
        </div>
    )
}