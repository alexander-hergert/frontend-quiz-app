"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const QuizButton = ({ link }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(link?.path, { scroll: false })}
      className="bg-primary px-[20px] w-full h-[96px] rounded-[24px] flex gap-4 items-center cursor-pointer"
    >
      <div
        className={`max-md:w-[40px] max-md:h-[40px] w-[56px] h-[56px] flex items-center justify-center rounded-[8px] ${link?.color}`}
      >
        <Image src={link?.picture} alt={link?.text} width={40} height={40} />
      </div>

      <Link href={link?.path} className="max-md:text-sm text-2xl">
        {link?.text}
      </Link>
    </div>
  );
};

export default QuizButton;
