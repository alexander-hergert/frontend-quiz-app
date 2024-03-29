"use client";
import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "@/context/globalContext";
import QuizButton from "./QuizButton";
import picHtml from "/public/assets/images/icon-html.svg";
import picCss from "/public/assets/images/icon-css.svg";
import picJs from "/public/assets/images/icon-js.svg";
import picAccessibility from "/public/assets/images/icon-accessibility.svg";
import picReact from "/public/assets/images/icon-react.svg";
import picNodejs from "/public/assets/images/icon-nodejs.svg";
import picSql from "/public/assets/images/icon-sql.svg";
import picGit from "/public/assets/images/icon-gitbash.svg";
import MixButton from "./MixButton";

export const link = [
  { path: "/html", text: "HTML", picture: picHtml, color: "bg-html" },
  { path: "/css", text: "CSS", picture: picCss, color: "bg-css" },
  {
    path: "/javascript",
    text: "JavaScript",
    picture: picJs,
    color: "bg-js",
  },
  {
    path: "/accessibility",
    text: "Accessibility",
    picture: picAccessibility,
    color: "bg-accessibility",
  },
  { path: "/react", text: "React", picture: picReact, color: "bg-react" },
  { path: "/nodejs", text: "Node.js", picture: picNodejs, color: "bg-nodejs" },
  { path: "/sql", text: "SQL", picture: picSql, color: "bg-sql" },
  { path: "/git", text: "Git", picture: picGit, color: "bg-git" },
];

const QuizButtons = () => {
  const [page, setPage] = useState(1);
  const { isMixMode } = useContext(GlobalContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <article>
          {isMixMode === "false" && (
            <aside
              className="max-md:w-[327px] md:w-[640px] xl:w-[564px] max-md:h-[292px] flex flex-col gap-[24px] 
    text-neutral"
            >
              {link.map((link, index) => {
                if (page === 1 && index < 4) {
                  return <QuizButton key={index} link={link} />;
                } else if (page === 2 && index >= 4) {
                  return <QuizButton key={index} link={link} />;
                }
              })}
            </aside>
          )}
          {isMixMode === "true" && <MixButton />}
          <button
            onClick={() => setPage(page === 1 ? 2 : 1)}
            className="btn relative mt-4 bg-primary border-0 text-neutral hover:bg-primary"
            disabled={isMixMode === "true"}
          >
            Switch page
          </button>
        </article>
      )}
    </>
  );
};

export default QuizButtons;
