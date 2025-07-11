import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);  

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="app-container">
      <h1 className="counter-heading">Counter</h1>
      <p>Count: {count}</p>
      <div className="button-container">
        <button className="counter-button" onClick={handleIncrement}>Increment</button>
        <button className="counter-button" onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
