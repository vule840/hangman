import React from "react";

import "./App.css";
import Hangman from "./components/Hangman";

import AddName from "./components/AddName";
import { RootState } from "typesafe-actions";
import { useSelector } from "react-redux";
import HighScores from "./components/HighScores";

function App() {
  const showName = useSelector((state: RootState) => state.sender.nameShow);
  const showHangman = useSelector(
    (state: RootState) => state.sender.hangmanShow
  );
  const showScore = useSelector((state: RootState) => state.sender.scoreShow);

  return (
    <div className="App">
      <header className="App-header">
        {showName && <AddName />}
        {showHangman && <Hangman />}
        {showScore && <HighScores />}
      </header>
    </div>
  );
}

export default App;
