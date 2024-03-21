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
    <section
      className="flex max-md:my-4 max-md:w-[327px] md:w-[640px] max-xl:flex-wrap xl:w-[1160px] max-md:h-[457px] 
        md:h-[638px] xl:h-[456px] md:gap-[64px] xl:gap-[140px] text-neutral"
    >
      {currentQuestion <= questions.length &&
        questions.map(
          (question, index) =>
            currentQuestion === index + 1 && (
              <article
                key={index}
                className="flex w-full gap-4 justify-between"
              >
                <div className="flex flex-col justify-between w-[465px] h-[452px]">
                  <div>
                    <p className="text-gray mb-[27px] text-xl">
                      Question {currentQuestion} of {questions.length}
                    </p>
                    <p className="text-[2rem]">{question?.question}</p>
                  </div>
                  <progress
                    className="progress progress-info border-4 bg-primary border-primary w-[465px] h-[16px]"
                    value={currentQuestion}
                    max="10"
                  ></progress>
                </div>
                <form
                  className="flex flex-col w-[564px] h-[440px]"
                  onSubmit={handleSubmit}
                >
                  <ul className="flex flex-col gap-[24px] w-[564px] mb-[32px]">
                    {question?.options.map((option, optionIndex) => (
                      <label
                        className="cursor-pointer"
                        htmlFor={`question-${index}-${optionIndex}`}
                      >
                        <li
                          key={optionIndex}
                          className={
                            correctAnswerIndex === optionIndex &&
                            isAnswerSubmitted
                              ? "border border-green-500"
                              : `${
                                  answerIndex === optionIndex &&
                                  isAnswerSubmitted
                                    ? "border border-red-500"
                                    : "bg-primary h-[92px] rounded-[24px] flex gap-[32px] pl-[20px]"
                                }`
                          }
                        >
                          <input
                            className="hidden"
                            required
                            id={`question-${index}-${optionIndex}`}
                            type="radio"
                            name={`question-${index}`}
                            value={option}
                            onChange={(e) => setAnswer(e.target.value)}
                          />
                          <div
                            className="flex justify-center items-center w-[56px] h-[56px] bg-gray
                           self-center text-xl rounded-[8px] text-black"
                          >
                            {optionIndex === 0
                              ? "A"
                              : optionIndex === 1
                              ? "B"
                              : optionIndex === 2
                              ? "C"
                              : "D"}
                          </div>
                          <span className="self-center text-xl">{option}</span>
                        </li>
                      </label>
                    ))}
                  </ul>
                  {!isAnswerSubmitted ? (
                    <button className="btn h-[92px] rounded-[24px] text-xl text-white border-none bg-nav">
                      Submit Answer
                    </button>
                  ) : (
                    <button
                      className="btn h-[92px] rounded-[24px] text-xl text-white border-none bg-nav"
                      type="button"
                      onClick={(e) => handleNextQuestion(e)}
                    >
                      Next Question
                    </button>
                  )}
                </form>
              </article>
            )
        )}
      {currentQuestion > questions.length && (
        <Score score={score} icon={icon} title={title} />
      )}
    </section>
  );
};

export default Quiz;
