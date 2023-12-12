import React from "react";
import {Input} from "./Input";
import {useState} from "react";

export const RGB = () => {
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [number3, setNumber3] = useState('')
    let [temp1, setTemp1] = useState(0)
    let [temp2, setTemp2] = useState(0)
    let [temp3, setTemp3] = useState(0)
    const [result, setResult] = useState('')


    const Calc = () => {
        setTemp1(
            temp1%16 === 10 ? temp1= 'A' :
                    temp1%16 === 11? temp1= 'B' :
                        temp1%16 === 12? temp1 = 'C':
                            temp1%16 === 13? temp1 = 'D':
                                temp1%16 === 14? temp1 = 'E':
                                    temp1%16 === 12? temp1 = 'C' : temp1 = 'D')

            setNumber1(temp1%16)
        setTemp2(temp2%16 === 10 ? temp2= 'A' :
            temp2%16 === 11? temp2= 'B' :
                temp2%16 === 12? temp2 = 'C':
                    temp2%16 === 13? temp2 = 'D':
                        temp2%16 === 14? temp2 = 'E':
                            temp2%16 === 12? temp2 = 'C' : temp2 = 'D')
        setNumber2(temp2%16)
        setTemp3(temp3%16 === 10 ? temp3= 'A' :
            temp3%16 === 11? temp3= 'B' :
                temp3%16 === 12? temp3 = 'C':
                    temp3%16 === 13? temp3 = 'D':
                        temp3%16 === 14? temp3 = 'E':
                            temp3%16 === 12? temp3 = 'C' : temp3 = 'D')
        setNumber3(temp3%16)
        setResult(number3 + number2 + number1)
    }

    return (
        <div>
            <div>
                <span>Please enter RED value: </span>
                <Input value={number1} setValue={setNumber1}/>
            </div>
            <div>
                <span>Please enter GREEN value: </span>
                <Input value={number2} setValue={setNumber2}/>
            </div>
            <div>
                <span>Please enter BLUE value: </span>
                <Input value={number3} setValue={setNumber3}/>
            </div>
            <button onClick={Calc}>Calculate</button>
            <div>
                <span>Your RGB HEX color is: #{result} </span>
            </div>
        </div>
    )
}