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
import picMix from "/public/assets/images/icon-mix.svg";
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
  { path: "/mix", text: "Mix", picture: picMix, color: "bg-mix" },
];

const QuizButtons = () => {
  const [page, setPage] = useState(1);
  const { isMixMode, selectedTopics } = useContext(GlobalContext);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <article data-testid="quiz-buttons">
          {isMixMode === "false" && (
            <aside
              className="max-md:w-[327px] md:w-[640px] xl:w-[564px] max-md:h-[292px] flex flex-col gap-[24px] 
    text-neutral"
            >
              {link.map((link, index) => {
                if (page === 1 && index < 4) {
                  return <QuizButton key={index} link={link} />;
                } else if (page === 2 && index >= 4 && index < 8) {
                  return <QuizButton key={index} link={link} />;
                }
              })}
            </aside>
          )}
          {isMixMode === "true" && (
            <MixButton selectedTopics={selectedTopics} />
          )}
          <div className="flex items-center mt-4 gap-4">
            <button
              data-testid="switch-button"
              onClick={() => setPage(page === 1 ? 2 : 1)}
              className="btn bg-primary border-0 text-neutral hover:bg-primary"
              disabled={isMixMode === "true"}
            >
              Switch page
            </button>
            {selectedTopics.length === 0 && (
              <p arial-label="error" className="text-red-500">
                Please select at least one Topic.
              </p>
            )}
          </div>
        </article>
      )}
    </>
  );
};

export default QuizButtons;
