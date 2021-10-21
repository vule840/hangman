import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { sendScore, showScore } from "../store/request";
//import { sendScore, showScore } from "../store/request";

const Hangman = ({ duration = 120000 }) => {
  const dispatch = useDispatch();
  const [quote, setQuote] = React.useState({ quote: "", id: null });
  const [id, setId] = React.useState<any>("");
  const [correctGuesses, setCorrectGuesses] = React.useState<any>([]);
  const [wrongLetters, setWrongLetters] = React.useState<any>([]);
  const [, setTimeUp] = React.useState(false);
  const [time, setTime] = React.useState<NodeJS.Timeout>();
  const theName = useSelector((state: RootState) => state.sender.name);
  const calculateScore = (L: number, U: number, E: number, T: any) => {
    let smarterScore = 0;
    smarterScore = ((L + U) / (E + T / 1000)) * 100;
    return smarterScore.toFixed();
  };
  //, setId(response._id)
  const alphabets = [
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
    fetch("https://api.quotable.io/random?maxLength=20")
      .then((response) => response.json())
      .then((response) =>
        setQuote({ ...quote, quote: response.content, id: response._id })
      );

    const timeout = setTimeout(() => {
      setTimeUp(true);
    }, duration);
    setTime(timeout);

    return () => clearTimeout(timeout);
  }, []);

  const filterChars = (character: any) => {
    const regex = /\W+/g;
    const found = character.match(regex);

    if (character === " ") {
      return "---";
    } else if (found ? found[0] : "") {
      return character;
    } else {
      return "_";
    }
  };

  const word = quote ? quote.quote : "";
  const maskedWord = word
    .split("")
    .map((letter) =>
      correctGuesses.includes(letter) ? letter : filterChars(letter)
    )
    .join(" ");
  console.log(word);
  //RESTART
  const restart = () => {
    fetch("https://api.quotable.io/random?maxLength=20")
      .then((response) => response.json())
      .then((response) => {
        setQuote(response.content);
        setId(response._id);
      });
    setCorrectGuesses([]);
    setWrongLetters([]);
  };

  //FINISH
  if (maskedWord && !maskedWord.includes("_")) {
    dispatch(showScore());
    const score = {
      quoteId: id,
      //length: quote.length,
      uniqueCharacters: correctGuesses.length / 2,
      userName: theName,
      errors: wrongLetters.length,
      duration: time,
    };
    // fetch(
    //   "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores",
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json, text/plain, */*",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(score),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));

    dispatch(
      sendScore(
        parseInt(
          calculateScore(
            quote.quote.length,
            correctGuesses.length / 2,
            wrongLetters.length,
            time
          )
        )
      )
    );
  }

  return (
    <div>
      <h2>Hangman</h2>
      <p>
        <strong>Wrong letters:</strong> {wrongLetters}
      </p>
      <p>
        {" "}
        <strong>Errors:</strong> {wrongLetters.length}{" "}
      </p>
      <p>{maskedWord}</p>
      {alphabets.map((alphabet, index) => (
        <button
          className="buttons"
          key={index}
          onClick={() => {
            if (
              word.includes(alphabet) ||
              word.includes(alphabet.toUpperCase())
            ) {
              setCorrectGuesses([
                ...new Set([
                  ...correctGuesses,
                  alphabet.toUpperCase(),
                  alphabet,
                ]),
              ]);
            } else {
              setWrongLetters([...new Set([...wrongLetters, alphabet])]);
            }
          }}
        >
          {alphabet}
        </button>
      ))}
      <br />
      <button onClick={restart}>Change quote and restart</button>
      {wrongLetters.length > 5 && <p>You lost, but keep playing :)</p>}
      {!maskedWord.includes("_") && <p>You Won</p>}
    </div>
  );
};

export default Hangman;
