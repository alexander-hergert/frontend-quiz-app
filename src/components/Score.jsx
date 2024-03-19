import React from "react";
import Link from "next/link";

const Score = ({ score, icon, title }) => {
  return (
    <div className="flex gap-4 justify-between">
      <h1>Quiz completed, You scored...</h1>
      <div className="flex flex-col">
        <div>
          <div className="flex gap-4 items-center">
            <img src={icon} alt="topic" width={50} height={50} />
            <h2>{title}</h2>
          </div>
          <p>{score}</p>
          <p>out of 10</p>
        </div>
        <Link href={"/"} className="btn">
          Play Again
        </Link>
      </div>
    </div>
  );
};

export default Score;
