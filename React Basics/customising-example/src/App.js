// import "./App.css";

// function App() {

//     function handleClick() { 
//         let randomNum = Math.floor(Math.random() * 3) + 1;
//         console.log(randomNum);
//         let userInput = prompt('type a number'); 
//         alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
//     }

//     return (
//       <div>
//         <h1>Task: Add a button and handle a click event</h1>
//         <button onClick={handleClick}> Guess the number between 1 and 3 </button>
//       </div>
//     );
//   }
  
// export default App;


import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("Hello World!");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={() => setInputValue("Boom reset !")}>
        Reset Input
      </button>
    </div>
  );
}

export default App;
