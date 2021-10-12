import React from "react";

import "./App.css";
import Hangman from "./components/Hangman";

function App() {
  const [name, setName] = React.useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h5>Add name</h5>
        <form onSubmit={handleSubmit} action="">
          <input onChange={(e) => setName(e.target.value)} type="text" />
          <br />
          <input type="submit" />
        </form>
        <Hangman />
      </header>
    </div>
  );
}

export default App;
