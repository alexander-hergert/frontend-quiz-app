"use client";
import React from "react";
import { useContext } from "react";
import GlobalContext from "@/context/globalContext";

const Settings = () => {
  const {
    isShuffle,
    setIsShuffle,
    numberOfQuestions,
    setNumberOfQuestions,
    isExam,
    setIsExam,
  } = useContext(GlobalContext);

  return (
    <section className="text-accent flex flex-col justify-center items-center settings mt-4">
      <h1 className="text-2xl">Settings</h1>
      <div className="flex gap-4 mt-4">
        <label htmlFor="shuffle">Shuffle mode</label>
        <input
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
          checked={isShuffle === "true" ? true : false}
        />
      </div>
      <div className="flex gap-4 mt-4">
        <label htmlFor="number">Number of Questions</label>
        <div id="number">
          <fieldset>
            <input
              onChange={() => {
                setNumberOfQuestions(10);
                localStorage.setItem("numberOfQuestions", 10);
              }}
              type="radio"
              className="w-[48px] h-[28px] border-none cursor-pointer appearance-none"
              value="10"
              id="num-10"
              name="question-number"
              checked={numberOfQuestions === 10}
            />
            <input
              onChange={() => {
                setNumberOfQuestions(20);
                localStorage.setItem("numberOfQuestions", 20);
              }}
              type="radio"
              className="w-[48px] h-[28px] border-none cursor-pointer appearance-none"
              value="20"
              id="num-20"
              name="question-number"
              checked={numberOfQuestions === 20}
            />
            <input
              onChange={() => {
                setNumberOfQuestions(30);
                localStorage.setItem("numberOfQuestions", 30);
              }}
              type="radio"
              className="w-[48px] h-[28px] border-none cursor-pointer appearance-none"
              value="30"
              id="num-30"
              name="question-number"
              checked={numberOfQuestions === 30}
            />
          </fieldset>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <label htmlFor="exam">Exam mode</label>
        <input
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
      </div>
    </section>
  );
};

export default Settings;
