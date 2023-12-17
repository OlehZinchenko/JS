import './App.css';
import {Greetings} from "./Components/Greetings";
import {Gopni4ek} from "./Components/Gopni4ek"
import {Capitalize} from './Components/Capitalize'
import {Counter} from './Components/Counter'
import {Credentials} from "./Components/Credentials";
import {Beer} from "./Components/Beer";
import {NoTag} from "./Components/NoTag";
import {BigTag} from "./Components/BigTag";
import {NewLine} from "./Components/NewLine";
import {Youtube} from "./Components/Youtube";

function App() {
    return (
        <div className="App">
            <h1>Greeting</h1>
            <Greetings/>
            <h1>Gopni4ek</h1>
            <Gopni4ek/>
            <h1>Capitalize</h1>
            <Capitalize/>
            <h1>Word count</h1>
            <Counter/>
            <h1>Credentials</h1>
            <Credentials/>
            <h1>Beer</h1>
            <Beer/>
            <h1>No tag</h1>
            <NoTag/>
            <h1>Big Tag</h1>
            <BigTag/>
            <h1>NewLine</h1>
            <NewLine/>
            <h1>YouTube</h1>
            <Youtube/>
        </div>
    );
}

export default App;
