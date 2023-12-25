import React from'react';
import {Input} from "./Input";
import {useState} from "react";

export const Scissors = () => {
    const [yourChoice, setYourChoice] = useState('')
    const [computerChoice, setComputerChoice] = useState('')
    const [status, setStatus] = useState('')
    const [buffer, setBuffer] = useState(0)

    const Calc = () => {
        setBuffer(Math.random())

        if (buffer >= 0.33)
            setComputerChoice('Камень')
        if (buffer <= 0.66 && buffer > 0.33)
            setComputerChoice('Ножницы')
        if (buffer > 0.66)
            setComputerChoice('Бумага')
        if (yourChoice === computerChoice)
            setStatus('Ничья')
        if (yourChoice === "Камень" && computerChoice === "Ножницы")
            setStatus('Вы')
        if (yourChoice === "Камень" && computerChoice === "Бумага")
            setStatus('Компьютер')
        if (yourChoice === "Ножницы" && computerChoice === "Камень")
            setStatus('Компьютер')
        if (yourChoice === "Ножницы" && computerChoice === "Бумага")
            setStatus('Вы')
        if (yourChoice === "Бумага" && computerChoice === "Камень")
            setStatus('Вы')
        if (yourChoice === "Бумага" && computerChoice === "Ножницы")
            setStatus('Компьютер')
    }

    return (
        <div>
            <div>
                <div>
                    <span>Enter your choice:</span><br/>
                    <Input value={yourChoice} setValue={setYourChoice}/>
                </div>
                <button onClick={Calc}>Set choice</button>
                <div>
                    <span>Computer choice is: <strong>{computerChoice}</strong></span><br/>
                </div>
                <div>
                    <span>Winner is: <strong>{status}</strong></span><br/>
                </div>
            </div>
        </div>
    )
}
