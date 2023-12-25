import React from'react';
import {Input} from "./Input";
import {useState} from "react";

export const CurrencyExchange = () => {
    const [currency, setCurrency] = useState('')
    const [receive, setReceive] = useState('')
    const [action, setAction] = useState('')
    const [amount, setAmount] = useState(0)
    const [rate, setRate] = useState(0)
    const [answer, setAnswer] = useState(0)

    const Calc = () => {
        setCurrency(currency.toLowerCase())
        setReceive(receive.toLowerCase())
        setAction(action.toLowerCase())
        if (currency === 'usd' && receive === 'eur'){
            action === 'buy' ? setRate(0.92) : setRate(1.10)
            setAnswer(amount * rate)
        }
        if (currency === 'usd' && receive === 'uah'){
            action === 'buy' ? setRate(38.5) : setRate(0.41)
            setAnswer(amount * rate)
        }
        if (currency === 'eur' && receive === 'uah'){
            action === 'buy' ? setRate(39.8) : setRate(0.39)
            setAnswer(amount * rate)
        }
        if (currency === 'uah' && receive === 'eur'){
            action === 'buy' ? setRate(38.5) : setRate(0.41)
            setAnswer(amount * rate)
        }
    }

    return (
        <div>
            <div>
                <div className="currency">
                    <span>Enter currency (USD, EUR, UAH) to change:</span><br/>
                    <Input value={currency} setValue={setCurrency}/>
                </div>
                <div className="currency">
                    <span>Buy of Sell</span><br/>
                    <Input value={action} setValue={setAction}/>
                </div>
                <div className="currency">
                    <span>Enter currency (USD, EUR, UAH) to receive:</span><br/>
                    <Input value={receive} setValue={setReceive}/>
                </div>
                <div className="currency">
                    <span>Enter amount:</span><br/>
                    <Input value={amount} setValue={setAmount}/>
                </div>
                <div className="currency">
                    <button onClick={Calc}>Calculate</button>
                    <div>Rate is <strong>{rate}</strong></div>
                    <div>You'll receive <strong>{answer}</strong> in UAH</div>
                </div>
            </div>
        </div>
    )
}
