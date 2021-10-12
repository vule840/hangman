import React from "react";

const Hangman = () => {
  const [quote, setQuote] = React.useState("");
  const [correctGuesses, setCorrectGuesses] = React.useState<any>([]);
  const [wrongLetters, setWrongLetters] = React.useState<any>([]);
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    ",",
    ".",
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  React.useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((response) => response.json())
      .then((response) => setQuote(response.content));
  }, []);
  const filterChars = (character: any) => {
    if (character === " " || character === "." || character === ",") {
      return character;
    } else {
      return "_";
    }
  };
  const word = quote ? quote : "";
  console.log(word);
  const maskedWord = word
    .split("")
    .map((letter) =>
      correctGuesses.includes(letter) ? letter : filterChars(letter)
    )
    .join(" ");

  return (
    <div>
      <h2>Hangman</h2>
      <p>Wrong letters: {wrongLetters}</p>
      <p>{maskedWord}</p>
      {alphabets.map((alphabet, index) => (
        <button
          key={index}
          onClick={() => {
            if (word.includes(alphabet)) {
              setCorrectGuesses([...correctGuesses, alphabet]);
            } else {
              setWrongLetters([...new Set([...wrongLetters, alphabet])]);
            }
          }}
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
};

export default Hangman;
