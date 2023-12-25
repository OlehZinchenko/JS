import {Input} from "./Input";
import {useState} from "react";

export const Lexics = () => {
    const [sentence, setSentence] = useState("")
    const [correctSentence, setCorrectSentence] = useState("")
    const wordReplacements = {
        "kurwa": "трясця",
        "ja pierdole": "я вражений",
    };
    const pattern = new RegExp(Object.keys(wordReplacements).join("|"), "gi");


    const check = () => {
        if (sentence.includes("kurwa") || sentence.includes("ja pierdole")){
            setCorrectSentence (sentence.replace(pattern, match => wordReplacements[match.toLowerCase()]))
        }

    }


    return (
        <div>
            <div>
                <span>Please, enter your sentence: </span>
                <Input value={sentence} setValue={setSentence} type={"text"}/>
            </div>
            <button onClick={check}>Check sentence</button>
            <div>
                <span>Correct sentence: <strong>{correctSentence}</strong></span><br/>
            </div>
        </div>
    )
}
