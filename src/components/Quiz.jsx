"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Score from "./Score";
import { useRouter } from "next/navigation";
import correct from "/public/assets/images/icon-correct.svg";
import incorrect from "/public/assets/images/icon-incorrect.svg";
import error from "/public/assets/images/icon-error.svg";

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
  const [answerIndex, setAnswerIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnswerSubmitted(true);
    checkAnswers(e);
  };

  const selectAnswerStyle = (target) => {
    //li element
    const parent = target.parentElement.parentElement;
    parent.classList.add("border-2", "border-info");
    //remove styles for other list items
    const listItems = document.querySelectorAll("li");
    listItems.forEach((item) => {
      if (item !== parent) {
        item.classList.remove("border-2", "border-info");
      }
    });
    //div sibling
    const div = target.nextElementSibling;
    div.classList.add("bg-info", "text-white");
    //remove styles for other divs
    const divs = document.querySelectorAll("div");
    divs.forEach((div) => {
      if (div !== target.nextElementSibling) {
        div.classList.remove("bg-info", "text-white");
      }
    });
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
        md:h-[822px] xl:h-[456px] md:gap-[64px] xl:gap-[140px] text-neutral"
    >
      {currentQuestion <= questions.length &&
        questions.map(
          (question, index) =>
            currentQuestion === index + 1 && (
              <article
                key={index}
                className="flex max-xl:flex-col w-full max-md:gap-0 gap-[64px] xl:gap-4 xl:justify-between"
              >
                <div className="flex flex-col xl:justify-between md:w-[640px] xl:w-[465px] h-[242px] xl:h-[452px] gap-[40px]">
                  <div className="max-md:h-[129px] h-[186px] flex flex-col">
                    <p className="text-gray mb-[27px] text-xl h-[129px]">
                      Question {currentQuestion} of {questions.length}
                    </p>
                    <p className="text-[2rem] max-md:text-xl">
                      {question?.question}
                    </p>
                  </div>
                  <progress
                    className="progress progress-info border-4 bg-primary border-primary max-md:w-[327px] md:w-[640px] xl:w-[465px] h-[16px]"
                    value={currentQuestion - 1}
                    max="10"
                  ></progress>
                </div>
                <form
                  className="flex flex-col max-md:w-[327px] md:w-[640px] xl:w-[564px] h-[440px]"
                  onSubmit={handleSubmit}
                >
                  <ul className="flex flex-col gap-[24px] max-md:w-[327px] md:w-[640px] xl:w-[564px] mb-[32px]">
                    {question?.options.map((option, optionIndex) => (
                      <label
                        className="cursor-pointer"
                        htmlFor={`question-${index}-${optionIndex}`}
                        key={optionIndex}
                      >
                        <li
                          onClick={() => {
                            if (isAnswerSubmitted) return;
                            setAnswerIndex(optionIndex);
                          }}
                          className={
                            answerIndex === correctAnswerIndex &&
                            isAnswerSubmitted &&
                            answerIndex === optionIndex
                              ? "border-2 bg-primary border-green max-md:h-[64px] md:h-[80px] h-[92px] rounded-[24px] flex justify-between gap-[32px] pl-[20px] w-full"
                              : `${
                                  answerIndex === optionIndex &&
                                  isAnswerSubmitted
                                    ? "border-2 bg-primary border-red max-md:h-[64px] md:h-[80px] h-[92px] rounded-[24px] flex justify-between gap-[32px] pl-[20px] w-full"
                                    : `bg-primary max-md:h-[64px] md:h-[80px] h-[92px] rounded-[24px] flex justify-between gap-[32px] pl-[20px] w-full
                                    group`
                                }`
                          }
                        >
                          <div className="flex gap-6">
                            <input
                              className="hidden"
                              required
                              id={`question-${index}-${optionIndex}`}
                              type="radio"
                              name={`question-${index}`}
                              value={option}
                              onChange={(e) => {
                                if (isAnswerSubmitted) return;
                                setAnswer(e.target.value);
                                selectAnswerStyle(e.target);
                              }}
                            />
                            <div
                              className={`flex justify-center items-center max-md:w-[40px] max-md:h-[40px] w-[56px] h-[56px] bg-gray
                           self-center text-xl rounded-[8px] text-black  ${
                             answerIndex !== optionIndex
                               ? "group-hover:bg-[#f6e7ff] group-hover:text-info"
                               : correctAnswerIndex === optionIndex &&
                                 isAnswerSubmitted
                               ? "bg-green text-white"
                               : correctAnswerIndex !== optionIndex &&
                                 isAnswerSubmitted
                               ? "bg-red text-white"
                               : ""
                           } `}
                            >
                              {optionIndex === 0
                                ? "A"
                                : optionIndex === 1
                                ? "B"
                                : optionIndex === 2
                                ? "C"
                                : "D"}
                            </div>
                            <span className="self-center text-xl max-md:text-sm">
                              {option}
                            </span>
                          </div>
                          <div className="mr-4 self-center">
                            {answerIndex === correctAnswerIndex &&
                            isAnswerSubmitted &&
                            answerIndex === optionIndex ? (
                              <Image src={correct} alt="icon" />
                            ) : answerIndex !== correctAnswerIndex &&
                              isAnswerSubmitted &&
                              answerIndex === optionIndex ? (
                              <Image src={incorrect} alt="icon" />
                            ) : correctAnswerIndex === optionIndex &&
                              isAnswerSubmitted ? (
                              <Image src={correct} alt="icon" />
                            ) : (
                              ""
                            )}
                          </div>
                        </li>
                      </label>
                    ))}
                  </ul>
                  {!isAnswerSubmitted ? (
                    <button className="btn hover:bg-[#d394fa] max-md:h-[56px] h-[92px] w-full rounded-[24px] text-xl text-white border-none bg-nav">
                      Submit Answer
                    </button>
                  ) : (
                    <button
                      className="btn hover:bg-[#d394fa] max-md:h-[56px] h-[92px] w-full rounded-[24px] text-xl text-white border-none bg-nav"
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
