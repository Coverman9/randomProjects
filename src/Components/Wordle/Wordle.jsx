import React, { useEffect, useState } from "react";
import "./Wordle.css";
import axios from "axios";

const Wordle = () => {
  const [word, setWord] = useState("");
  const initialArrays = Array.from({ length: 6 }, () => new Array(6).fill(""));
  const [myWords, setMyWords] = useState(initialArrays);
  const [currentArr, setCurrentArr] = useState(0);

  useEffect(() => {
    axios
      .get("https://random-word-api.herokuapp.com/word?lang=en&length=6")
      .then((res) => setWord(...res.data));
  }, []);

  console.log(myWords);
  console.log(word);

  const handleInput = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && e.target.value.length === 6) {
      let guessingWord = word.split("");
      for (let i = 0; i < myWords[currentArr].length; i++) {
        if (guessingWord.includes(myWords[currentArr][i])) {
          if (guessingWord[i] === myWords[currentArr][i]) {

            const myElement = document.getElementById(`row${currentArr}col${i}`);
            myElement.style.backgroundColor = 'green';
          } else {
            const myElement = document.getElementById(`row${currentArr}col${i}`);
            myElement.style.backgroundColor = 'orange';
          }
        }
      }
      if (word === myWords[currentArr].join("")) {return alert("You Win!");}
      e.target.value = "";
      setCurrentArr((prev) => prev + 1);
    } else if (e.key === "Enter" && e.target.value.length < 6) {
      alert("Word must be 6 length");
    }
  };

  return (
    <>
      <h1>Wordle</h1>
      <input
        className="wordInput"
        onChange={(e) =>
          setMyWords((prev) => {
            let word = e.target.value.split("");
            if (word.length < 6)
              word.push(...new Array(6 - word.length).fill(""));
            prev[currentArr] = word;
            return [...prev];
          })
        }
        onKeyUp={(e) => handleInput(e)}
        maxlength="6"
      />
      <div className="wordsWrapper">
        {myWords.map((word, row) => {
          return word.map((letter, col) => {
            if (letter === "" || letter)
              return <div id={"row" + row + "col" + col} className="letter">{letter}</div>;
          });
        })}
      </div>
    </>
  );
};
export default Wordle;
