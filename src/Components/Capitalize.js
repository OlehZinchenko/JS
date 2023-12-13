import {Input} from "./Input";
import {useState} from "react";

export const Capitalize = () => {
    const [sentence, setSentence] = useState("")
    const [translated, setTranslated] = useState("")
    const refactor = () => {
        setTranslated(sentence.replace(/^.{1}/g, sentence[0].toUpperCase()))
    }

    return (
        <div>
            <div>
                <span>Please, enter your sentence: </span>
                <Input value={sentence} setValue={setSentence} type={"text"}/>
            </div>
            <button onClick={refactor}>Translate</button>
            <div>
                <span>Capitalased sentence: {translated}</span>
            </div>
        </div>
    )
}