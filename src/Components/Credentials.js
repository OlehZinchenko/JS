import {Input} from "./Input";
import {useState} from "react";

export const Credentials = () => {
    const [firstName, setFirstName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [surname, setSurname] = useState('')
    const capital = () => {
        setFirstName(firstName.replace(/^.{1}/g, firstName[0].toUpperCase()))
        setFatherName(fatherName.replace(/^.{1}/g, fatherName[0].toUpperCase()))
        setSurname(surname.replace(/^.{1}/g, surname[0].toUpperCase()))
    }

    return (
        <div>
            <div>
                <span>Please, enter your name: </span>
                <Input value={firstName} setValue={setFirstName} type={"text"}/>
                <div>
                    <span>Please, enter your father name: </span>
                    <Input value={fatherName} setValue={setFatherName} type={"text"}/>
                </div>
                <div>
                    <span>Please, enter your surname: </span>
                    <Input value={surname} setValue={setSurname} type={"text"}/>
                </div>
                {/*<button onClick={refactor}>Trim redundant spaces</button>*/}
                <button onClick={capital}>Capitalise words</button>
                <div>
                    <div>Capitalised name: <strong>{firstName}</strong></div>
                    <div>Capitalised father name: <strong>{fatherName}</strong></div>
                    <div>Capitalised surname: <strong>{surname}</strong></div>
                </div>
                <div>
                    <span><strong>Your full name is:</strong> {firstName+" "+fatherName+" "+surname}</span>
                </div>
            </div>
        </div>
    )
}
