import {Input} from "./Input";
import {useState} from "react";

export const NewLine = () => {
    const [str, setStr] = useState('')
    const [splitStr, setSplitStr] = useState([])
    const [multilineStr, setMultilineStr] = useState('')

    const multilineString = () => {
        setSplitStr (str.split("\n"))
        setMultilineStr (splitStr.toString())
    }

    return (
        <div>
            <span>Please, enter string with some \n for new line: </span>
            <Input value={str} setValue={setStr} type={"text"}/>
            <br/>
            <button onClick={multilineString}>Make your string multiline</button>
            <br/>
            <span>Multiline text: <strong>{multilineStr}</strong></span>
        </div>)
}
