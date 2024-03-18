"use client";
import React, { useState } from "react";
import Score from "./Score";

const HtmlQuiz = ({ questions, icon }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState("");
  const [answerIndex, setAnswerIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(questions[0].answer);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  console.log(answerIndex, correctAnswerIndex);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnswerSubmitted(true);
    checkAnswers(e);
  };

  const checkAnswers = (e) => {
    setAnswerIndex(questions[currentQuestion - 1].options.indexOf(answer));
    setCorrectAnswerIndex(
      questions[currentQuestion - 1].options.indexOf(correctAnswer)
    );
    if (answer === correctAnswer) {
      console.log("Correct");
      setScore(score + 1);
    } else {
      console.log("Incorrect");
    }
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    setIsAnswerSubmitted(false);
    setAnswer("");
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion < questions.length) {
      setCorrectAnswer(questions[currentQuestion].answer);
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
                      <li
                        key={optionIndex}
                        className={
                          correctAnswerIndex === optionIndex &&
                          isAnswerSubmitted
                            ? "border border-green-500"
                            : `${
                                answerIndex === optionIndex && isAnswerSubmitted
                                  ? "border border-red-500"
                                  : ""
                              }`
                        }
                      >
                        <input
                          required
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
                  {!isAnswerSubmitted ? (
                    <button className="btn">Submit</button>
                  ) : (
                    <button
                      className="btn"
                      type="button"
                      onClick={(e) => handleNextQuestion(e)}
                    >
                      Next Question
                    </button>
                  )}
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
