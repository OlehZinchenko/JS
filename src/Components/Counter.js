import {Input} from "./Input";
import {useState} from "react";

export const Counter = () => {
    const [sentence, setSentence] = useState("")
    const [buffer, setBuffer] = useState([])
    const [counter, setCounter] = useState(0)
    const refactor = () => {
        setBuffer(sentence.split(" "))
        setCounter(buffer.length)
    }

    return (
        <div>
            <div>
                <span>Please, enter your sentence: </span>
                <Input value={sentence} setValue={setSentence} type={"text"}/>
            </div>
            <button onClick={refactor}>Count the words</button>
            <div>
                <span>Number of words: {counter}</span>
            </div>
        </div>
    )
}