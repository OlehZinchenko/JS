<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 2c9c1c6 (Initialize project using Create React App)
