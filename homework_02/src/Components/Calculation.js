import {Input} from "./Input";
import {useState} from "react";

export const Calculation = () => {
    const [consume, setConsume] = useState(0)
    const [mileage, setMileage] = useState(0)
    const [price, setPrice] = useState(0)
    const [result, setResult] = useState(0)
    const Calc = () => {
        setResult(consume * (mileage/100) * price)
    }

    return (
        <div>
            <div>
                <span>Enter fuel consuming per 100km: </span>
                <Input value={consume} setValue={setConsume}/>
            </div>
            <div>
                <span>Enter your month kilometers: </span>
                <Input value={mileage} setValue={setMileage}/>
            </div>
            <div>
                <span>Enter fuel price $: </span>
                <Input value={price} setValue={setPrice}/>
            </div>
            <button onClick={Calc}>Calculate</button>
            <div>
                <span>Your fuel cost per month $: {result}</span>
            </div>
        </div>
    )
}