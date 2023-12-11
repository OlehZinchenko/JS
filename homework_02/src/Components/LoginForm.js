import {Input} from "./Input";
import {useState} from "react";

const credentials = {
    login: 'admin',
    password: 'qwerty',
};
export const LoginForm = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [validated, setValidated] = useState(undefined)
    const check = () => {
        const validated = login === credentials.login && password === credentials.password
        setValidated(validated)
    }

    return (
        <div>
            <div>
                <span>Enter your login: </span>
                <Input value={login} setValue={setLogin} type={"text"}/>
            </div>
            <div>
                <span>Enter your password: </span>
                <Input value={password} setValue={setPassword} type={"password"}/>
            </div>
            <button onClick={check}>Login</button>
            {validated === true && <div className={'success'}> Hello! </div>}
            {validated === false && <div className={'fail'}> Wrong credentials! </div>}
        </div>
    )
}