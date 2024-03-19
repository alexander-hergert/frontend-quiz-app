"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Score from "./Score";
import { useRouter } from "next/navigation";

const Quiz = ({ data }) => {
  const pathname = usePathname();
  const [questions, setQuestions] = useState([]);
  const [icon, setIcon] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();

  //set questions and icon based on pathname
  useEffect(() => {
    if (pathname === "/html") {
      setQuestions(data?.quizzes?.[0].questions);
      setIcon(data?.quizzes?.[0].icon);
      setTitle(data?.quizzes?.[0].title);
      setCorrectAnswer(data?.quizzes?.[0].questions[0].answer);
    } else if (pathname === "/css") {
      setQuestions(data?.quizzes?.[1].questions);
      setIcon(data?.quizzes?.[1].icon);
      setTitle(data?.quizzes?.[1].title);
      setCorrectAnswer(data?.quizzes?.[1].questions[0].answer);
    } else if (pathname === "/javascript") {
      setQuestions(data?.quizzes?.[2].questions);
      setIcon(data?.quizzes?.[2].icon);
      setTitle(data?.quizzes?.[2].title);
      setCorrectAnswer(data?.quizzes?.[2].questions[0].answer);
    } else if (pathname === "/accessibility") {
      setQuestions(data?.quizzes?.[3].questions);
      setIcon(data?.quizzes?.[3].icon);
      setTitle(data?.quizzes?.[3].title);
      setCorrectAnswer(data?.quizzes?.[3].questions[0].answer);
    } else {
      router.push("/");
    }
  }, [pathname, data]);

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState("");
  const [answerIndex, setAnswerIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState();
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnswerSubmitted(true);
    checkAnswers(e);
  };

  const checkAnswers = () => {
    setAnswerIndex(questions[currentQuestion - 1].options.indexOf(answer));
    setCorrectAnswerIndex(
      questions[currentQuestion - 1].options.indexOf(correctAnswer)
    );
    console.log(answer, correctAnswer);
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
        <Score score={score} icon={icon} title={title} />
      )}
    </>
  );
};

export default Quiz;
