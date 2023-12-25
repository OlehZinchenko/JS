import React from'react';
import {Input} from "./Input";
import {useState} from "react";

export const Scissors = () => {
    const [yourChoice, setYourChoice] = useState('')
    const [computerChoice, setComputerChoice] = useState('')
    const [status, setStatus] = useState('')

    const Calc = () => {
        const buffer = Math.random()
        let _computerChoice = ''

        if (buffer <= 0.33)
            _computerChoice = 'Камень'
        if (buffer > 0.33 && buffer <= 0.66)
            _computerChoice = 'Ножницы'
        if (buffer > 0.66)
            _computerChoice = 'Бумага'
        setComputerChoice(_computerChoice)

        if (yourChoice === _computerChoice)
            setStatus('Ничья')
        if (yourChoice === "Камень" && _computerChoice === "Ножницы")
            setStatus('Вы')
        if (yourChoice === "Камень" && _computerChoice === "Бумага")
            setStatus('Компьютер')
        if (yourChoice === "Ножницы" && _computerChoice === "Камень")
            setStatus('Компьютер')
        if (yourChoice === "Ножницы" && _computerChoice === "Бумага")
            setStatus('Вы')
        if (yourChoice === "Бумага" && _computerChoice === "Камень")
            setStatus('Вы')
        if (yourChoice === "Бумага" && _computerChoice === "Ножницы")
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
