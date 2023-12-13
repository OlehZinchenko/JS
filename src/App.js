import './App.css';
import {Greetings} from "./Components/Greetings";
import {Gopni4ek} from "./Components/Gopni4ek"
import {Capitalize} from './Components/Capitalize'
import {Counter} from './Components/Counter'
import {Credentials} from "./Components/Credentials";

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
        </div>
    );
}

export default App;