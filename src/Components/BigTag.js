import {Input} from "./Input";
import {useState} from "react";

export const BigTag = () => {
    const [str, setStr] = useState('')
    const [tagStr, setTagStr] = useState('')
    const [firstIndex, setFirstIndex] = useState('')
    const [secondIndex, setSecondIndex] = useState('')
    // const regexp = /<[^>]+>/

    const tag = () => {
        setFirstIndex(str.indexOf('<'))
        setSecondIndex(str.indexOf('>'))
        setTagStr(str.slice(firstIndex, secondIndex+1))
    }

    return (
        <div>
            <span>Please, enter string with some tag: </span>
            <Input value={str} setValue={setStr} type={"text"}/>
            <br/>
            <button onClick={tag}>Find HTML like tags</button>
            <br/>
            <span>Tag in string in uppercase: <strong>{tagStr.toUpperCase()}</strong></span>
        </div>)
}
