"use client";
import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "@/context/globalContext";

const Timer = ({ setCurrentQuestion }) => {
  const { numberOfQuestions } = useContext(GlobalContext);
  const [minutes, setMinutes] = useState(numberOfQuestions);
  const [seconds, setSeconds] = useState(0);
  const [isClient, setIsClient] = useState(false);

  //to remove error
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          setCurrentQuestion(numberOfQuestions + 1);
        } else {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      }
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      }
    }, [1000]);
    return () => clearInterval(timer);
  }, [seconds, minutes]);

  return (
    <span
      data-testid="timer"
      className="countdown font-mono text-2xl absolute top-4 left-4 bg-info rounded p-1 max-md:text-xl max-md:flex-col items-center"
    >
      {isClient && (
        <>
          <span data-testid="minutes" style={{ "--value": minutes }}>
            {minutes}
          </span>
          m
          <span data-testid="seconds" style={{ "--value": seconds }}>
            {seconds}
          </span>
          s
        </>
      )}
    </span>
  );
};

export default Timer;
