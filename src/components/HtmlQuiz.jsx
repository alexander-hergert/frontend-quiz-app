"use client";
import React from "react";

const HtmlQuiz = ({ questions }) => {

  return (
    <div className="flex flex-col">
      <div>
        <div>QuestionNumber</div>
        <div>Question</div>
        <div>Progress</div>
      </div>
      <div className="flex flex-col">
        <div>Answers</div>
        <div>Submit</div>
      </div>
    </div>
  );
};

export default HtmlQuiz;
