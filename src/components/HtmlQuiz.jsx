"use client";
import React, { useState } from "react";
import Score from "./Score";

const HtmlQuiz = ({ questions, icon }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(questions[0].answer);

  const handleSubmit = (e) => {
    console.log(answer, correctAnswer);
    e.preventDefault();
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion < questions.length) {
      setCorrectAnswer(questions[currentQuestion].answer);
    }
    if (answer === correctAnswer) {
      console.log("Correct");
      setScore(score + 1);
    } else {
      console.log("Incorrect");
    }
  };

  return (
    <>
      {currentQuestion <= questions.length &&
        questions.map(
          (question, index) =>
            currentQuestion === index + 1 && (
              <div key={index} className="flex gap-4 justify-between border">
                <div>
                  <div>
                    Question {currentQuestion} / {questions.length}
                  </div>
                  <div>{question?.question}</div>
                  <progress
                    className="border-2 progress progress-primary w-56"
                    value={currentQuestion}
                    max="10"
                  ></progress>
                </div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <ul>
                    {question?.options.map((option, optionIndex) => (
                      <li key={optionIndex}>
                        <input
                          id={`question-${index}-${optionIndex}`}
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                        <label htmlFor={`question-${index}-${optionIndex}`}>
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <button className="btn">Submit</button>
                </form>
              </div>
            )
        )}
      {currentQuestion > questions.length && (
        <Score score={score} icon={icon} />
      )}
    </>
  );
};

export default HtmlQuiz;
