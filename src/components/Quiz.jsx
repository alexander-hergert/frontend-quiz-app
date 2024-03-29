"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Score from "./Score";
import { useRouter } from "next/navigation";
import correct from "/public/assets/images/icon-correct.svg";
import incorrect from "/public/assets/images/icon-incorrect.svg";
import error from "/public/assets/images/icon-error.svg";
import { useContext } from "react";
import GlobalContext from "@/context/globalContext";
import { shuffleArray } from "@/app/utils/utils";
import Timer from "./Timer";

const Quiz = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  //to remove error
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { isShuffle, numberOfQuestions, isExam } = useContext(GlobalContext);
  const pathname = usePathname();
  const [questions, setQuestions] = useState([]);
  const [icon, setIcon] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();

  //set questions and icon based on pathname
  useEffect(() => {
    if (pathname === "/html") {
      const shuffledArray = shuffleArray(
        shuffleArray(
          data?.quizzes?.[0].questions,
          isShuffle,
          numberOfQuestions
        ).map((question) => {
          const shuffledOptions = shuffleArray(question.options, isShuffle);
          return { ...question, options: shuffledOptions };
        })
      );
      setQuestions(shuffledArray);
      setIcon(data?.quizzes?.[0].icon);
      setTitle(data?.quizzes?.[0].title);
    } else if (pathname === "/css") {
      const shuffledArray = shuffleArray(
        shuffleArray(
          data?.quizzes?.[1].questions,
          isShuffle,
          numberOfQuestions
        ).map((question) => {
          const shuffledOptions = shuffleArray(question.options, isShuffle);
          return { ...question, options: shuffledOptions };
        })
      );
      setQuestions(shuffledArray);
      setIcon(data?.quizzes?.[1].icon);
      setTitle(data?.quizzes?.[1].title);
    } else if (pathname === "/javascript") {
      const shuffledArray = shuffleArray(
        shuffleArray(
          data?.quizzes?.[2].questions,
          isShuffle,
          numberOfQuestions
        ).map((question) => {
          const shuffledOptions = shuffleArray(question.options, isShuffle);
          return { ...question, options: shuffledOptions };
        })
      );
      setQuestions(shuffledArray);
      setIcon(data?.quizzes?.[2].icon);
      setTitle(data?.quizzes?.[2].title);
    } else if (pathname === "/accessibility") {
      const shuffledArray = shuffleArray(
        shuffleArray(
          data?.quizzes?.[3].questions,
          isShuffle,
          numberOfQuestions
        ).map((question) => {
          const shuffledOptions = shuffleArray(question.options, isShuffle);
          return { ...question, options: shuffledOptions };
        })
      );
      setQuestions(shuffledArray);
      setIcon(data?.quizzes?.[3].icon);
      setTitle(data?.quizzes?.[3].title);
    } else if (pathname === "/react") {
      const shuffledArray = shuffleArray(
        shuffleArray(
          data?.quizzes?.[4].questions,
          isShuffle,
          numberOfQuestions
        ).map((question) => {
          const shuffledOptions = shuffleArray(question.options, isShuffle);
          return { ...question, options: shuffledOptions };
        })
      );
      setQuestions(shuffledArray);
      setIcon(data?.quizzes?.[4].icon);
      setTitle(data?.quizzes?.[4].title);
    } else if (pathname === "/nodejs") {
      const shuffledArray = shuffleArray(
        shuffleArray(
          data?.quizzes?.[5].questions,
          isShuffle,
          numberOfQuestions
        ).map((question) => {
          const shuffledOptions = shuffleArray(question.options, isShuffle);
          return { ...question, options: shuffledOptions };
        })
      );
      setQuestions(shuffledArray);
      setIcon(data?.quizzes?.[5].icon);
      setTitle(data?.quizzes?.[5].title);
    } else if (pathname === "/sql") {
      const shuffledArray = shuffleArray(
        shuffleArray(
          data?.quizzes?.[6].questions,
          isShuffle,
          numberOfQuestions
        ).map((question) => {
          const shuffledOptions = shuffleArray(question.options, isShuffle);
          return { ...question, options: shuffledOptions };
        })
      );
      setQuestions(shuffledArray);
      setIcon(data?.quizzes?.[6].icon);
      setTitle(data?.quizzes?.[6].title);
    } else if (pathname === "/git") {
      const shuffledArray = shuffleArray(
        shuffleArray(
          data?.quizzes?.[7].questions,
          isShuffle,
          numberOfQuestions
        ).map((question) => {
          const shuffledOptions = shuffleArray(question.options, isShuffle);
          return { ...question, options: shuffledOptions };
        })
      );
      setQuestions(shuffledArray);
      setIcon(data?.quizzes?.[7].icon);
      setTitle(data?.quizzes?.[7].title);
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
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (questions.length > 0) {
      setCorrectAnswer(questions[currentQuestion - 1]?.answer);
    }
  }, [questions, currentQuestion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answer) {
      console.log(answer);
      setIsError(true);
      return;
    }
    setIsError(false);
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
    if (answer === correctAnswer) {
      console.log("Correct");
      setScore(score + 1);
    } else {
    }
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    setIsAnswerSubmitted(false);
    setAnswer("");
    setCurrentQuestion(currentQuestion + 1);
    //scroll to top
    window.scrollTo(0, 0);
    if (currentQuestion < questions.length) {
      setCorrectAnswer(questions[currentQuestion].answer);
    }
  };

  return (
    <section
      className="flex max-md:my-4 max-md:w-[327px] md:w-[640px] max-xl:flex-wrap xl:w-[1160px] max-md:h-[457px] 
        md:h-[822px] xl:h-[456px] md:gap-[64px] xl:gap-[140px] text-neutral"
    >
      {isClient && isExam === "true" && (
        <Timer setCurrentQuestion={setCurrentQuestion} />
      )}
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
                    max={questions.length - 1}
                  ></progress>
                </div>
                <form
                  className="flex flex-col max-md:w-[327px] md:w-[640px] xl:w-[564px] "
                  onSubmit={(e) => handleSubmit(e)}
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
                              ? "border-2 bg-primary border-green p-4 rounded-[24px] flex justify-between gap-[32px] pl-[20px] w-full"
                              : `${
                                  answerIndex === optionIndex &&
                                  isAnswerSubmitted
                                    ? "border-2 bg-primary border-red p-4 rounded-[24px] flex justify-between gap-[32px] pl-[20px] w-full"
                                    : `bg-primary p-4 rounded-[24px] flex justify-between gap-[32px] pl-[20px] w-full
                                    group`
                                }`
                          }
                        >
                          <div className="flex gap-6">
                            <input
                              className="hidden"
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
                              className={`flex justify-center items-center max-md:min-w-[40px] max-md:h-[40px] min-w-[56px] h-[56px] bg-gray
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
                          <div className="mr-4 self-center min-w-[40px]">
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
                  {isError && (
                    <div className="flex gap-4 items-center mt-4 justify-center">
                      <Image src={error} alt="Please select an answer" />
                      <p className="text-error">Please select an answer</p>
                    </div>
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
