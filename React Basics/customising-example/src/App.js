import "./App.css";
import { useState } from "react";

function App() {
  // Initialize boolean state with useState
  const [light, setLight] = useState(false);

  // onClick handler to update the boolean state
  function handleToggle() {
    setLight(!light); // Toggle the boolean value
  }

  return (
    <div>
      <h1>useState with Boolean State Example</h1>
      
      <div style={{ margin: "20px 0" }}>
        <p>Current State: <strong>{light ? "ON" : "OFF"}</strong></p>
        <p>Boolean Value: <code>{light.toString()}</code></p>
      </div>

      <button 
        onClick={handleToggle}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: light ? "#4CAF50" : "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {light ? "Turn OFF" : "Turn ON"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3>What's happening:</h3>
        <ul>
          <li><strong>useState(false)</strong> - Initializes boolean state to false</li>
          <li><strong>setIsOn(!isOn)</strong> - Toggles the boolean value when button is clicked</li>
          <li><strong>onClick={handleToggle}</strong> - Connects the click event to our handler</li>
        </ul>
      </div>
    </div>
  );
}

export default App;


