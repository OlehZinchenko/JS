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

        // setTemp1(
        //     temp1%16 === 10 ? temp1= 'A' :
        //             temp1%16 === 11? temp1= 'B' :
        //                 temp1%16 === 12? temp1 = 'C':
        //                     temp1%16 === 13? temp1 = 'D':
        //                         temp1%16 === 14? temp1 = 'E':
        //                             temp1%16 === 12? temp1 = 'C' : temp1 = 'D')
        //
        //     setNumber1(temp1%16)
        // setTemp2(temp2%16 === 10 ? temp2= 'A' :
        //     temp2%16 === 11? temp2= 'B' :
        //         temp2%16 === 12? temp2 = 'C':
        //             temp2%16 === 13? temp2 = 'D':
        //                 temp2%16 === 14? temp2 = 'E':
        //                     temp2%16 === 12? temp2 = 'C' : temp2 = 'D')
        // setNumber2(temp2%16)
        // setTemp3(temp3%16 === 10 ? temp3= 'A' :
        //     temp3%16 === 11? temp3= 'B' :
        //         temp3%16 === 12? temp3 = 'C':
        //             temp3%16 === 13? temp3 = 'D':
        //                 temp3%16 === 14? temp3 = 'E':
        //                     temp3%16 === 12? temp3 = 'C' : temp3 = 'D')
        // setNumber3(temp3%16)
        // setResult(number3 + number2 + number1)
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