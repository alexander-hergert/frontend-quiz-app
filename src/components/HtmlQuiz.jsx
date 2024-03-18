"use client";
import React from "react";

const HtmlQuiz = ({ questions }) => {
  return (
    <>
      {questions.map((question, index) => (
        <div key={index} className="flex gap-4 justify-between border">
          <div>
            <div>
              Question {index + 1 + " / "} {questions.length}
            </div>
            <div>{question?.question}</div>
            <div>Progress</div>
          </div>
          <form className="flex flex-col">
            <ul>
              {question?.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
            <button>Submit</button>
          </form>
        </div>
      ))}
    </>
  );
};

export default HtmlQuiz;
