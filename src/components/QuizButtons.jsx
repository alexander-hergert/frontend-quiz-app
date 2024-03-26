import React from "react";
import QuizButton from "./QuizButton";
import picHtml from "/public/assets/images/icon-html.svg";
import picCss from "/public/assets/images/icon-css.svg";
import picJs from "/public/assets/images/icon-js.svg";
import picAccessibility from "/public/assets/images/icon-accessibility.svg";
import picReact from "/public/assets/images/icon-react.svg";
import picNodejs from "/public/assets/images/icon-nodejs.svg";
import picSql from "/public/assets/images/icon-sql.svg";
import picGit from "/public/assets/images/icon-gitbash.svg";

export const link = [
  { path: "/html", text: "HTML", picture: picHtml, color: "bg-html" },
  { path: "/css", text: "CSS", picture: picCss, color: "bg-css" },
  {
    path: "/javascript",
    text: "Javascript",
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
  return (
    <article
      className="max-md:w-[327px] md:w-[640px] xl:w-[564px] max-md:h-[292px] flex flex-col gap-[24px] 
    text-neutral"
    >
      {link.map((link, index) => {
        return <QuizButton key={index} link={link} />;
      })}
    </article>
  );
};

export default QuizButtons;
