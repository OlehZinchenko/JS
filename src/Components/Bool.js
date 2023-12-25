import {Input} from "./Input";
import {useState} from "react";

export const Bool = () => {
    const [isMail, setIsMail] = useState('')
    const [isAdult, setIsAdult] = useState(0)

    const gender = () => {
        if (isMail === "Male" || isMail === "male") {
            setIsMail(true)
        }
        else {
            setIsMail(false)
        }
    }
    const adult = () => {
        if (isAdult >= 18) {
            setIsAdult(true)
        }
        else {
            setIsAdult(false)
        }
    }

    return (
        <div>
            <div>
                <span>Are you mail: </span>
                <Input value={isMail} setValue={setIsMail} type={"boolean"}/>
            </div>
            <button onClick={gender}>Confirm gender</button>
            <div>
                <span>Please, enter your age: </span>
                <Input value={isAdult} setValue={setIsAdult} type={"boolean"}/>
            </div>
            <button onClick={adult}>Confirm age</button>
        </div>
    )
}
