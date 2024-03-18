import React from "react";
import Image from "next/image";
import Link from "next/link";

const Score = ({ score, icon }) => {
  return (
    <div className="flex gap-4 justify-between">
      <h1>Quiz completed, You scored...</h1>
      <div className="flex flex-col">
        <div>
          <div className="flex gap-4 items-center">
            <Image src={icon} alt="" width={50} height={50} />
            <h2>Topic</h2>
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
