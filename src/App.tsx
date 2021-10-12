import React from "react";

import "./App.css";
import Hangman from "./components/Hangman";

import AddName from "./components/AddName";
import { RootState } from "typesafe-actions";
import { useSelector } from "react-redux";

function App() {
  const showName = useSelector((state: RootState) => state.sender.name);
  return (
    <div className="App">
      <header className="App-header">
        {!showName && <AddName />}
        {showName && <Hangman />}
      </header>
    </div>
  );
}

export default App;
