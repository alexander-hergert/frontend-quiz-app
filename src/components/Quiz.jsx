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
import { link } from "./QuizButtons";

const Quiz = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  //to remove error
  useEffect(() => {
    setIsClient(true);
    window.scrollTo(0, 0);
  }, []);

  const { isShuffle, numberOfQuestions, isExam, isMixMode, selectedTopics } =
    useContext(GlobalContext);
  const pathname = usePathname();
  const [questions, setQuestions] = useState([]);
  const [icon, setIcon] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();

  //set questions and icon based on pathname
  useEffect(() => {
    for (const item of link) {
      if (item.path === pathname && pathname !== "/mix") {
        const index = link.indexOf(item);
        const shuffledArray = shuffleArray(
          data?.quizzes?.[index].questions,
          isShuffle,
          numberOfQuestions
        )?.map((question) => {
          const shuffledOptions = shuffleArray(question?.options, isShuffle, 4);
          return { ...question, options: shuffledOptions };
        });
        setQuestions(shuffledArray);
        setIcon(data?.quizzes?.[index].icon);
        setTitle(data?.quizzes?.[index].title);
      }

      if (pathname === "/mix") {
        if (isMixMode === "true") {
          const newArrayOfQuestions = [];
          for (let i = 0; i < data?.quizzes?.length; i++) {
            if (selectedTopics.includes(data?.quizzes[i].title)) {
              newArrayOfQuestions.push(data?.quizzes[i].questions);
            }
          }
          const joinedArray = newArrayOfQuestions.flat();
          const shuffledArray = shuffleArray(
            shuffleArray(joinedArray, "true", numberOfQuestions)?.map(
              (question) => {
                const shuffledOptions = shuffleArray(question.options, "true");
                return { ...question, options: shuffledOptions };
              }
            )
          );
          setQuestions(shuffledArray);
          setIcon(data?.quizzes?.[0].icon);
          setTitle(data?.quizzes?.[0].title);
        }
      }
    }
    if (pathname === "/mix" || link.some((item) => item.path === pathname)) {
      console.log("valid path");
      if (selectedTopics?.length === 0 && isMixMode === "true") {
        router.push("/");
      }
    } else {
      console.log("invalid path");
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
    if (questions?.length > 0) {
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
    if (currentQuestion < questions?.length) {
      setCorrectAnswer(questions[currentQuestion].answer);
    }
  };

  return (
    <section
      data-testid="quiz"
      className={`${
        isExam === "true" && isClient ? "select-none" : ""
      } flex max-md:my-4 max-md:w-[327px] md:w-[640px] max-xl:flex-wrap xl:w-[1160px] md:gap-[64px] 
    xl:gap-[140px] text-neutral break-words`}
    >
      {isClient &&
        isExam === "true" &&
        currentQuestion <= numberOfQuestions && (
          <Timer setCurrentQuestion={setCurrentQuestion} />
        )}
      {currentQuestion <= questions?.length &&
        questions?.map(
          (question, index) =>
            currentQuestion === index + 1 && (
              <article
                key={index}
                className="flex max-xl:flex-col w-full max-md:gap-0 gap-[64px] xl:gap-4 xl:justify-between"
              >
                <div className="flex flex-col xl:justify-between md:w-[640px] xl:w-[465px] gap-[40px]">
                  <div className="flex flex-col">
                    <p className="text-accent mb-[27px] text-xl">
                      Question {currentQuestion} of {questions?.length}
                    </p>
                    <p className="text-[2rem] max-md:text-xl">
                      {question?.question}
                    </p>
                  </div>
                  <progress
                    className="max-md:mt-4 progress progress-info border-4 bg-primary border-primary max-md:w-[327px] md:w-[640px] xl:w-[465px] h-[16px]"
                    value={currentQuestion - 1}
                    max={questions?.length - 1}
                  ></progress>
                </div>
                <form
                  className="flex flex-col max-md:w-[327px] md:w-[640px] xl:w-[564px] max-md:mt-8"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <menu className="flex flex-col gap-[24px] max-md:w-[327px] md:w-[640px] xl:w-[564px] mb-[32px]">
                    {question?.options?.map((option, optionIndex) => (
                      <label
                        className="cursor-pointer"
                        htmlFor={`question-${index}-${optionIndex}`}
                        key={optionIndex}
                      >
                        <li
                          data-testid={`question-${index}-${optionIndex}`}
                          onClick={() => {
                            if (isAnswerSubmitted) return;
                            setAnswerIndex(optionIndex);
                          }}
                          className={
                            answerIndex === correctAnswerIndex &&
                            isAnswerSubmitted &&
                            answerIndex === optionIndex
                              ? "border-2 bg-primary border-green p-4 rounded-[24px] flex justify-between gap-[32px] pl-[20px] w-full break-words"
                              : `${
                                  answerIndex === optionIndex &&
                                  isAnswerSubmitted
                                    ? "break-words border-2 bg-primary border-red p-4 rounded-[24px] flex justify-between gap-[32px] pl-[20px] w-full"
                                    : `break-words bg-primary p-4 rounded-[24px] flex justify-between gap-[32px] pl-[20px] w-full
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
                  </menu>
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
      {currentQuestion > questions?.length && (
        <Score
          score={score}
          icon={icon}
          title={title}
          numberOfQuestions={numberOfQuestions}
        />
      )}
    </section>
  );
};

export default Quiz;
