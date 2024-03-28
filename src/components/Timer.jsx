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
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setCurrentQuestion(numberOfQuestions + 1);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, [1000]);
    return () => clearInterval(timer);
  }, [seconds, minutes]);

  return (
    <span className="countdown font-mono text-2xl absolute top-4 left-4">
      {isClient && (
        <>
          <span style={{ "--value": minutes }}>{minutes}</span>m
          <span style={{ "--value": seconds }}>{seconds}</span>s
        </>
      )}
    </span>
  );
};

export default Timer;
