import {Input} from "./Input";
import {useState} from "react";

export const Odd = () => {
    const [sentence, setSentence] = useState("")
    const [myNumber, setMyNumber] = useState(0)
    const [message, setMessage] = useState('')
    const regex = /\d+/g;
    const num = () => {
        setMyNumber(Number(sentence.match(regex)))
    }

    const odd = () => {
        if (myNumber % 2 !== 0) {
            setMessage("Your number is not even")
        }
        else {
            setMessage("Your number is even")
        }
    }


    return (
        <div>
            <div>
                <span>Please, enter your sentence with number: </span>
                <Input value={sentence} setValue={setSentence} type={"text"}/>
            </div>
            <button onClick={num}>Check number</button>
            <button onClick={odd}>Check odd</button>
            <div>
                <span>Number in sentence: <strong>{myNumber}</strong></span><br/>
                <span>Odd check: <strong>{message}</strong></span>
            </div>
        </div>
    )
}
