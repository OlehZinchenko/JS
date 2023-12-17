import {Input} from "./Input";
import {useState} from "react";

export const Beer = () => {
    const [str, setStr] = useState('')
    const [censored, setCensored] = useState('')
    const regexp = 'пиво'
    const beer = () => {
        // setCensored(str.replace(regexp, 'чай'))
        setCensored(str.split('пиво').join('чай'))
    }

    return (
        <div>
            <span>Please, enter string with 'пиво' word: </span>
            <Input value={str} setValue={setStr} type={"text"}/>
            <br/>
            <button onClick={beer}>Censor your string</button>
            <br/>
            <span>Censored string: <strong>{censored}</strong></span>
        </div>
    )
}
