import React from "react";
import Letter from "./Letter";

const Hangman = () => {
  const [quote, setQuote] = React.useState("");
  // const [currentLetter, setCurrentLetter] = React.useState("");
  const [wordTocompare, addWords] = React.useState<any[]>([]);
  const [keyLetter, setKeyLetter] = React.useState<any>();
  // const [indexLetter, setIndexLetter] = React.useState<number>();
  React.useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((response) => response.json())
      .then((response) => setQuote(response.content));
  }, []);

  // console.log(quote.split(""));

  const inputLetter = (e: any) => {
    e.preventDefault();
    const key = e.key;
    // console.log(quote.toLowerCase().split(" "));
    const words = quote.toLowerCase().split(" ");
    //console.log(key);
    if (quote.length > 0) {
      words.map((word) => {
        if (word.includes(key)) {
          //console.log(word, key);
          setKeyLetter(key);
          addWords((prev) => [...new Set([...prev, word])]);
          console.log(wordTocompare);
        }
      });
      // if (quote.toLowerCase().split(" ").includes(key)) {
      //   //console.log(key);
      //   setKeyLetter(key);
      //   setIndexLetter(
      //     quote
      //       .toLowerCase()
      //       .split("")
      //       .findIndex((x) => x === key)
      //   );
      // }
    }

    // if (quote.split("").includes(key)) {
    //   console.log(`key exists ${key}`);
    // } else {
    //   console.log(`key doestn exists ${key}`);
    // }
  };
  window.addEventListener("keydown", inputLetter);

  return (
    <div>
      <h2>Hangman</h2>
      <Letter
        quote={quote}
        keyLetter={keyLetter}
        wordTocompare={wordTocompare}
      />
      <form action="">
        <input max="1" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Hangman;
