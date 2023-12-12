import React from 'react';
import './App.css';
import {YearCalculator} from './Components/YearCalculator';
import {Temperature} from './Components/Temperature';
import {Calculator} from './Components/Calculator';
import {Exchange} from './Components/Exchange'
import {RGB} from './Components/RGB'
import {Entrance} from './Components/Entrance';

const a = 5;
let b, c;

b = (a * 5);
b = c = (b/2);

function App() {
    return (
        <>
            <div className="App">
                <div>B value: {b}</div>
                <div>C Value: {c}</div>
            </div>
            <h1>Year calculator</h1>
            <YearCalculator/>
            <h1>Temp converter</h1>
            <Temperature/>
            <h1>Floor Calculator</h1>
            <Calculator/>
            <h1>Currency Exchange</h1>
            <Exchange/>
            <h1>To HEX color</h1>
            <RGB/>
            <h1>Падики</h1>
            <Entrance/>
        </>
    );
}

export default App;