import { queryByPlaceholderText } from "@testing-library/dom";
import React from "react";

const Letter = (props: any) => {
  const word = props.quote.split("");
  //console.log(props.wordTocompare.split(""));
  //console.log(props.keyLetter);
  // const addClass = (index: any) => {
  //   console.log(index);
  //   let classes = "";
  //   if (index === props.indexLetter) {
  //     classes += "visible";
  //   }
  //   return classes;
  // };
  return (
    <div className="hangman">
      {/* {props.wordTocompare.split("").map((letter: any, i: any) => {
        return (
          <span className="letter" key={i}>
            {props.keyLetter.includes(letter) ? letter : ""}
          </span>
        );
      })} */}
      {/* {props.quote &&
        props.quote.split("").map((x: any, index: any) => (
          <div key={index} className={`${x === " " ? `empty` : ""} letter`}>
          {props.quote.includes(props.keyLetter) ? props.keyLetter : ""} 
           {className={index === props.indexLetter ? "visible" : ""} 
            <span
              className={"" + (index === props.indexLetter ? "visible" : "")}
            >
              {" "}
              {props.quote.split("").includes(x) ? x : ""}
            </span>
          </div>
        ))} */}
    </div>
  );
};

export default Letter;
