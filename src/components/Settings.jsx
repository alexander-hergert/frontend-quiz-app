"use client";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import GlobalContext from "@/context/globalContext";
import { link } from "./QuizButtons";

const Settings = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    isShuffle,
    setIsShuffle,
    numberOfQuestions,
    setNumberOfQuestions,
    isExam,
    setIsExam,
    isMixMode,
    setIsMixMode,
    selectedTopics,
    setSelectedTopics,
  } = useContext(GlobalContext);

  return (
    <section className="text-accent flex flex-col justify-center items-center settings mt-20">
      <h1 className="text-2xl">Settings</h1>
      <div className="flex justify-between gap-4 mt-4 w-[327px]">
        <label htmlFor="shuffle">Shuffle mode</label>
        <div className="flex items-center gap-2 w-[7rem]">
          <span>Off</span>
          <input
            role="checkbox"
            aria-label="shuffle mode"
            id="shuffle"
            onChange={() => {
              setIsShuffle(isShuffle === "true" ? "false" : "true");
              localStorage.setItem(
                "isShuffle",
                isShuffle === "true" ? "false" : "true"
              );
            }}
            type="checkbox"
            className="w-[48px] h-[28px] border-none cursor-pointer"
            checked={
              isShuffle === "true" || isMixMode === "true" ? true : false
            }
          />
          <span>On</span>
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-4 w-[327px]">
        <label htmlFor="number">Number of Questions</label>
        <div id="number" className="flex items-center gap-2 w-[7rem]">
          <fieldset className="number-of-questions">
            <input
              role="radio"
              aria-label="10 questions"
              onChange={() => {
                setNumberOfQuestions(10);
                localStorage.setItem("numberOfQuestions", 10);
              }}
              type="radio"
              className="w-[28px] h-[28px] border-none cursor-pointer appearance-none"
              value="10"
              id="num-10"
              name="question-number"
              checked={numberOfQuestions === 10}
            />
            <input
              role="radio"
              aria-label="20 questions"
              onChange={() => {
                setNumberOfQuestions(20);
                localStorage.setItem("numberOfQuestions", 20);
              }}
              type="radio"
              className="w-[28px] h-[28px] border-none cursor-pointer appearance-none"
              value="20"
              id="num-20"
              name="question-number"
              checked={numberOfQuestions === 20}
            />
            <input
              role="radio"
              aria-label="30 questions"
              onChange={() => {
                setNumberOfQuestions(30);
                localStorage.setItem("numberOfQuestions", 30);
              }}
              type="radio"
              className="w-[28px] h-[28px] border-none cursor-pointer appearance-none"
              value="30"
              id="num-30"
              name="question-number"
              checked={numberOfQuestions === 30}
            />
          </fieldset>
          <span className="text-accent w-[20px]">
            {isClient ? numberOfQuestions : ""}
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-4 w-[327px]">
        <label htmlFor="exam">Exam mode</label>
        <div className="flex items-center gap-2 w-[7rem]">
          <span>Off</span>
          <input
            role="checkbox"
            aria-label="exam mode"
            id="exam"
            onChange={() => {
              setIsExam(isExam === "true" ? "false" : "true");
              localStorage.setItem(
                "isExam",
                isExam === "true" ? "false" : "true"
              );
            }}
            type="checkbox"
            className="w-[48px] h-[28px] border-none cursor-pointer"
            checked={isExam === "true" ? true : false}
          />
          <span>On</span>
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-4 w-[327px]">
        <label htmlFor="mix">Mix mode</label>
        <div className="flex items-center gap-2 w-[7rem]">
          <span>Off</span>
          <input
            role="checkbox"
            aria-label="mix mode"
            id="mix"
            onChange={() => {
              setIsMixMode(isMixMode === "true" ? "false" : "true");
              localStorage.setItem(
                "mixMode",
                isMixMode === "true" ? "false" : "true"
              );
            }}
            type="checkbox"
            className="w-[48px] h-[28px] border-none cursor-pointer"
            checked={isMixMode === "true" ? true : false}
          />
          <span>On</span>
        </div>
      </div>
      {isMixMode === "true" && isClient && (
        <div className="flex justify-between items-center gap-4 mt-4 w-[327px]">
          <label htmlFor="topics" className="self-start mt-5">
            Topics
          </label>
          <aside>
            {link.map((link) => {
              return (
                <fieldset
                  key={link.text}
                  className="flex justify-between items-center gap-4"
                  onChange={() => {
                    const newTopics = selectedTopics.includes(link.text)
                      ? selectedTopics.filter((topic) => topic !== link.text) //take away
                      : [...selectedTopics, link.text]; //put in
                    setSelectedTopics(newTopics);
                    localStorage.setItem("topics", JSON.stringify(newTopics));
                  }}
                >
                  <label htmlFor={link.text}>{link.text}</label>
                  <div className="flex items-center gap-2 w-[7rem]">
                    <span>Off</span>
                    <input
                      name={link.text}
                      role="checkbox"
                      aria-label={link.text}
                      id={link.text}
                      type="checkbox"
                      className="appearance-none mt-4 cursor-pointer"
                      defaultChecked={selectedTopics.includes(link.text)}
                    />
                    <span>On</span>
                  </div>
                </fieldset>
              );
            })}
          </aside>
        </div>
      )}
    </section>
  );
};

export default Settings;
