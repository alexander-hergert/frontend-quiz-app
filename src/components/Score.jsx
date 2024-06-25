"use client";
import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "@/context/globalContext";
import Link from "next/link";
import mixIcon from "/public/assets/images/icon-mix.svg";
import Image from "next/image";

const Score = ({ score, icon, title, numberOfQuestions }) => {
  let bgColor = "";

  const { isMixMode } = useContext(GlobalContext);

  bgColor = [
    { name: "HTML", color: "bg-html" },
    { name: "CSS", color: "bg-css" },
    { name: "JavaScript", color: "bg-js" },
    { name: "Accessibility", color: "bg-accessibility" },
    { name: "React", color: "bg-react" },
    { name: "Node.js", color: "bg-nodejs" },
    { name: "SQL", color: "bg-sql" },
    { name: "Git / Bash", color: "bg-git" },
  ].filter((topic) => topic.name === title)[0]?.color;

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
              data-testid="background"
              className={`w-[56px] h-[56px] flex justify-center items-center ${
                isMixMode === "true" ? "bg-mix" : bgColor
              } rounded`}
            >
              <Image
                data-testid="icon"
                src={isMixMode === "true" ? mixIcon : icon}
                width={40}
                height={40}
                alt="topic"
                className="w-[40px] h-[40px]"
              />
            </div>
            <h2 data-testid="title" className="text-2xl">
              {isClient && isMixMode === "true" ? "Mix" : title}
            </h2>
          </div>
          <div className="h-[196px]">
            <p data-testid="score" className="text-[6rem]">
              {score}
            </p>
            <p data-testid="numberofquestions" className="text-accent">
              out of {isClient ? numberOfQuestions : ""}
            </p>
          </div>
        </div>
        <Link
          data-testid="link"
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
