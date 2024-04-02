"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Score = ({ score, icon, title, numberOfQuestions }) => {
  let bgColor = "";
  if (title === "HTML") {
    bgColor = "bg-html";
  } else if (title === "CSS") {
    bgColor = "bg-css";
  } else if (title === "JavaScript") {
    bgColor = "bg-js";
  } else if (title === "Accessibility") {
    bgColor = "bg-accessibility";
  } else if (title === "React") {
    bgColor = "bg-react";
  } else if (title === "Node.js") {
    bgColor = "bg-nodejs";
  } else if (title === "SQL") {
    bgColor = "bg-sql";
  } else if (title === "Git / Bash") {
    bgColor = "bg-git";
  }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      className="flex justify-between max-md:my-4 max-md:w-[327px] md:w-[640px] max-xl:flex-col xl:w-[1160px] max-md:h-[457px] 
        md:h-[638px] xl:h-[456px] max-md:gap-[40px] md:gap-[64px] xl:gap-[140px]"
    >
      <h1 className="max-xl:text-[2rem] xl:text-[3rem] max-md:h-[88px] xl:h-[136px] w-full">
        Quiz completed, You scored...
      </h1>
      <div className="flex flex-col gap-[32px] h-[512px]">
        <div className="flex flex-col justify-center md:w-[640px] xl:w-[564px] items-center bg-primary max-md:rounded-[12px] md:rounded-[24px] h-[388px]">
          <div className="flex items-center h-[56px] gap-[24px]">
            <div
              className={`w-[56px] h-[56px] flex justify-center items-center ${bgColor} rounded`}
            >
              <img src={icon} alt="topic" className="w-[40px] h-[40px]" />
            </div>
            <h2 className="text-2xl">{title}</h2>
          </div>
          <div className="h-[196px]">
            <p className="text-[6rem]">{score}</p>
            <p className="text-accent">
              out of {isClient ? numberOfQuestions : ""}
            </p>
          </div>
        </div>
        <Link
          href={"/"}
          className="btn max-md:h-[56px] h-[92px] w-full max-md:rounded-[12px] xl:rounded-[24px] text-xl
           text-white border-none bg-nav hover:bg-[#d394fa]"
        >
          Play Again
        </Link>
      </div>
    </section>
  );
};

export default Score;
