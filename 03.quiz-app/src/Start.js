import React, { useState } from "react";
import { questions } from "./Questions";
import "./App.css";

function Start() {
  const [currQues, setCurrQues] = useState(0);
  const [score, setScore] = useState(0);
  const [corrAns, setCorrAns] = useState(false);

  const selectOption = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQues = currQues + 1;
    if (nextQues < questions.length) {
      setCurrQues(currQues + 1);
    } else {
      setCorrAns(true);
    }
  };

  const reset = () => {
    setCurrQues(0);
    setScore(0);
    setCorrAns(false);
  };

  return (
    <div>
      <h1>GK Quiz</h1>
      {corrAns ? (
        <>
          <h1>Your score is :{score}</h1>
          <button className="btn" onClick={reset}>
            Restart
          </button>
        </>
      ) : (
        <div className="question-wrapper">
          <h3>{questions[currQues].text} </h3>

          <ul>
            {questions[currQues].options.map((option, i) => {
              return (
                <li
                  onClick={() => selectOption(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>

          {/* {items.map((item) => <li key 
            ={item.id}>{item.name}</li>)} */}
        </div>
      )}
    </div>
  );
}
export default Start;
