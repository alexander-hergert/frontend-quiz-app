"use client";
import React, { useState } from "react";

const HtmlQuiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  return (
    <>
      {questions.map(
        (question, index) =>
          currentQuestion === index + 1 && (
            <div key={index} className="flex gap-4 justify-between border">
              <div>
                <div>
                  Question {currentQuestion} / {questions.length}
                </div>
                <div>{question?.question}</div>
                <progress
                  className="progress progress-primary w-56"
                  value={currentQuestion}
                  max="10"
                ></progress>
              </div>
              <form className="flex flex-col">
                <ul>
                  {question?.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <input
                        id={`question-${index}-${optionIndex}`}
                        type="radio"
                        name={`question-${index}`}
                      />
                      <label htmlFor={`question-${index}-${optionIndex}`}>
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
                <button>Submit</button>
              </form>
            </div>
          )
      )}
      <div>
        <button
          className="btn"
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          BACK
        </button>
        <button
          className="btn"
          onClick={() => setCurrentQuestion(currentQuestion + 1)}
        >
          FORWARD
        </button>
      </div>
    </>
  );
};

export default HtmlQuiz;
