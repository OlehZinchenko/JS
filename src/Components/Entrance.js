import React from "react";
import {Input} from "./Input";
import {useState} from "react";

export const Entrance = () => {
    const [floors, setFloors] = useState(0)
    const [flats, setFlats] = useState(0)
    const [flatNumber, setFlatNumber] = useState(0)
    const [result, setResult] = useState(0)

    const Calc = () => {
        setResult(Math.floor((flatNumber-1)%(floors*flats)/flats+1))
    }

    return (
        <div>
            <div>
                <span>Please enter floors number: </span>
                <Input value={floors} setValue={setFloors}/>
            </div>
            <div>
                <span>Please enter number of flats per floor: </span>
                <Input value={flats} setValue={setFlats}/>
            </div>
            <div>
                <span>Please enter number of flat: </span>
                <Input value={flatNumber} setValue={setFlatNumber}/>
            </div>
            <button onClick={Calc}>Calculate</button>
            <div>
                <span>Your floor result is: {result}</span>
            </div>
        </div>
    )
}