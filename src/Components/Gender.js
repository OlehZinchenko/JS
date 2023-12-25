import {Input} from "./Input";
import {useState} from "react";

export const Gender = () => {
    const [gender, setGender] = useState('')
    const [answer, setAnswer] = useState('')


    const check = () => {
        (gender === "M" || gender === "Male" || gender === "male") ?
            setAnswer("Your are Male") :
            setAnswer("Your are Female")
    }

    return (
        <div>
            <div>
                <span>Enter your gender: </span>
                <Input value={gender} setValue={setGender} type={"text"}/>
            </div>
            <button onClick={check}>Confirm gender</button>
            <span><strong>{answer}</strong></span>
        </div>
    )
}
