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
      className="w-[200px] bg-white border rounded-lg flex gap-4 items-center cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
    >
      <Image src={link?.picture} alt={link?.text} />
      <Link href={link?.path}>{link?.text}</Link>
    </div>
  );
};

export default QuizButton;
