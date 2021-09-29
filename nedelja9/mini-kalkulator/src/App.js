import { useEffect, useState } from "react";
import { calculate } from "./service";

function App() {
  const [result, setResult] = useState(0);
  const [inputedValue, setInputedValue] = useState("");
  // const [operator, setOperator] = useState('');
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>Calculator</h1>
      <br />
      <div>
        <input type="text" placeholder="rezultat" disabled value={result} />
        <input
          type="number"
          onChange={(e) => {
            setInputedValue(e.target.value);
          }}
          value={inputedValue}
        />
        <button
          onClick={(e) => {
            setResult((prev) => {
              return calculate(prev, Number(inputedValue), "+");
            });
            setText((prev) => {
              return prev + "+" + inputedValue;
            });
          }}
        >
          +
        </button>
        <button
          onClick={(e) => {
            setResult((prev) => {
              return calculate(prev, Number(inputedValue), "-");
            });
            setText((prev) => {
              return prev + "-" + inputedValue;
            });
          }}
        >
          -
        </button>
        <button
          onClick={(e) => {
            setResult((prev) => {
              return calculate(prev, Number(inputedValue), "*");
            });
            setText((prev) => {
              return prev + "*" + inputedValue;
            });
          }}
        >
          *
        </button>
        <button
          onClick={(e) => {
            setResult((prev) => {
              return calculate(prev, Number(inputedValue), "/");
            });
            setText((prev) => {
              return prev + "/" + inputedValue;
            });
          }}
        >
          /
        </button>
        <button
          onClick={(e) => {
            setText("");
            setResult(0);
            setInputedValue("");
          }}
        >
          Clear
        </button>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default App;
