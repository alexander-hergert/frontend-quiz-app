import React from "react";
import QuizButton from "./QuizButton";
import picHtml from "/public/assets/images/icon-html.svg";
import picCss from "/public/assets/images/icon-css.svg";
import picJs from "/public/assets/images/icon-js.svg";
import picAccessibility from "/public/assets/images/icon-accessibility.svg";

const QuizButtons = () => {
  const link = [
    { path: "/html", text: "HTML", picture: picHtml },
    { path: "/css", text: "CSS", picture: picCss },
    { path: "/javascript", text: "Javascript", picture: picJs },
    {
      path: "/accessibility",
      text: "Accessibility",
      picture: picAccessibility,
    },
  ];

  return (
    <div>
      {link.map((link, index) => {
        return <QuizButton key={index} link={link} />;
      })}
    </div>
  );
};

export default QuizButtons;
