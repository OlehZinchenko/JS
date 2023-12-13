import React from "react";
import {Input} from "./Input";
import {useState} from "react";

export const Greetings = () => {
    const [name, setName] = useState('')

    return (
        <div>
            <div>
                <span>Enter your name: </span>
                <Input value={name} setValue={setName}/>
            </div>
            <div className="greetings">Hello, {name}!</div>
        </div>
    )
}