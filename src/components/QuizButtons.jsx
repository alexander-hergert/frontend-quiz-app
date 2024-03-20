import React from "react";
import QuizButton from "./QuizButton";
import picHtml from "/public/assets/images/icon-html.svg";
import picCss from "/public/assets/images/icon-css.svg";
import picJs from "/public/assets/images/icon-js.svg";
import picAccessibility from "/public/assets/images/icon-accessibility.svg";

const QuizButtons = () => {
  const link = [
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
  ];

  return (
    <article className="w-[564px] flex flex-col gap-[24px]">
      {link.map((link, index) => {
        return <QuizButton key={index} link={link} />;
      })}
    </article>
  );
};

export default QuizButtons;
