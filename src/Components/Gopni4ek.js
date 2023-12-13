import {Input} from "./Input";
import {useState} from "react";

export const Gopni4ek = () => {
    const [sentence, setSentence] = useState("")
    const [translated, setTranslated] = useState("")
    const [bufferSeparator, setBufferSeparator] = useState([])
    const [bufferJoin, setBufferJoin] = useState('')
    const refactor = () => {
        setBufferSeparator(sentence.split(','))
        setBufferJoin(bufferSeparator.join(', блин, '))
    }

    return (
        <div>
            <div>
                <span>Please, enter your sentence: </span>
                <Input value={sentence} setValue={setSentence} type={"text"}/>
            </div>
            <button onClick={refactor}>Translate</button>
            <div>
                <span>Translated sentence: {bufferJoin}</span>
            </div>
        </div>
    )
}