import {Input} from "./Input";
import {useState} from "react";

export const Youtube = () => {
    const [str, setStr] = useState('')
    const [matches, setMatches] = useState([])
    const [ytlink, setYtlink] = useState('')
    const regex = /(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const video = () => {
        setMatches(str.match(regex));
        if (matches) {
            setYtlink(matches[0]);
            console.log(ytlink);
        } else {
            console.log("No YouTube link found in the text.");
        }
    }

    return (
        <div>
            <span>Please, enter YT link text: </span>
            <Input value={str} setValue={setStr} type={"text"}/>
            <br/>
            <button onClick={video}>Paste video</button>
            <br/>
            <iframe width="420" height="315"
                    src={ytlink}>
            </iframe>
        </div>)
}
