import {Input} from "./Input";
import {useState} from "react";

export const Sizes = () => {
    const [clothes, setClothes] = useState(0)
    const [female, setFemale] = useState(0)
    const [socks, setSocks] = useState(0)
    const [child, setChild] = useState(0)
    const [usaClothes, setUsaClothes] = useState(0)
    const [usaFemale, setUsaFemale] = useState(0)
    const [usaSocks, setUsaSocks] = useState(0)
    const [usaChild, setUsaChild] = useState(0)


    const check = () => {
        setUsaClothes(clothes-34)
        setUsaFemale(female-34)
        setUsaSocks(socks-13)
        setUsaChild(50-21)
    }

    return (
        <div>
            <div className="usa">
                <span>Введите размер верхней одежды (40-54): </span>
                <Input value={clothes} setValue={setClothes} type={"number"} min={40} max={54}/>
            </div>
            <button onClick={check}>Перевести в американскую систему</button>
            <br/>
            <span>Размер в американской системе: <strong>{usaClothes}</strong></span>
            <div className="usa">
                <span>Введите размер женского белья (42-56): </span>
                <Input value={female} setValue={setFemale} type={"number"} min={42} max={56}/>
            </div>
            <button onClick={check}>Перевести в американскую систему</button>
            <br/>
            <span>Размер в американской системе: <strong>{usaFemale}</strong></span>
            <div className="usa">
                <span>Введите размер носков (21-27): </span>
                <Input value={socks} setValue={setSocks} type={"number"} min={21} max={27}/>
            </div>
            <button onClick={check}>Перевести в американскую систему</button>
            <br/>
            <span>Размер в американской системе: <strong>{usaSocks}</strong></span>
            <div className="usa">
                <span>Введите размер детской одежды (50-140см): </span>
                <Input value={child} setValue={setChild} type={"number"} min={50} max={140}/>
            </div>
            <button onClick={check}>Перевести в американскую систему</button>
            <br/>
            <span>Размер в американской системе: <strong>{usaChild}</strong></span>
        </div>
    )
}
