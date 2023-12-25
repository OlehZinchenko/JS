import './App.css';
import {Odd} from "./Components/Odd";
import {Lexics} from "./Components/Lexics";
import {Bool} from "./Components/Bool";
import {BoolIf} from "./Components/BoolIf";
import {Sizes} from "./Components/Sizes";
import {Gender} from "./Components/Gender";
import {PromptOr} from "./Components/PromptOr"
import {Confirm} from "./Components/Confirm"
import {CurrencyExchange} from "./Components/CurrencyExchange"

function App() {
  return (
      <div className="App">
          {/*<h1>Number: odd</h1>*/}
          {/*<Odd/>*/}
          {/*<h1>String: lexics</h1>*/}
          {/*<Lexics/>*/}
          {/*<h1>Boolean</h1>*/}
          {/*<Bool/>*/}
          {/*<h1>Boolean: if</h1>*/}
          {/*<BoolIf/>*/}
          {/*<h1>Comparison: sizes</h1>*/}
          {/*<Sizes/>*/}
          {/*<h1>Ternary</h1>*/}
          {/*<Gender/>*/}
          {/*<h1>Prompt: or</h1>*/}
          {/*<PromptOr/>*/}
          <h1>Confirm</h1>
          <Confirm/>
          {/*<h1>Currency exchange</h1>*/}
          {/*<CurrencyExchange/>*/}
      </div>
  );
}

export default App;
