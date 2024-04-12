import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import html from "/public/assets/images/icon-html.svg";
import css from "/public/assets/images/icon-css.svg";
import js from "/public/assets/images/icon-js.svg";
import accessibility from "/public/assets/images/icon-accessibility.svg";
import react from "/public/assets/images/icon-react.svg";
import nodejs from "/public/assets/images/icon-nodejs.svg";
import sql from "/public/assets/images/icon-sql.svg";
import git from "/public/assets/images/icon-gitbash.svg";
import { link } from "./QuizButtons";

const MixButton = ({ selectedTopics }) => {
  const router = useRouter();
  const sources = [html, css, js, accessibility, react, nodejs, sql, git];
  return (
    <div
      onClick={() => {
        if (selectedTopics?.length > 0) {
          router.push("/mix", { scroll: false });
        }
      }}
      className="justify-center max-md:w-[327px] md:w-[640px] xl:w-[564px] max-md:h-[292px] h-[392px] bg-primary px-[20px] w-full max-xl:rounded-[12px] xl:rounded-[24px] flex gap-4 items-center cursor-pointer"
    >
      <article data-testid="mix-button" className="relative rotate-right">
        <div
          className={`rotate-left ${link[0].color} top-[-120px] left-[-20px] absolute max-md:w-[40px] max-md:h-[40px] w-[56px] h-[56px] flex items-center justify-center rounded-[8px]`}
        >
          <Image src={sources[0]} alt={link[0].text} width={40} height={40} />
        </div>
        <div
          className={`rotate-left ${link[1].color} top-[80px] left-[-20px] absolute max-md:w-[40px] max-md:h-[40px] w-[56px] h-[56px] flex items-center justify-center rounded-[8px]`}
        >
          <Image src={sources[1]} alt={link[1].text} width={40} height={40} />
        </div>
        <div
          className={`rotate-left ${link[2].color} top-[-20px] left-[-120px] absolute max-md:w-[40px] max-md:h-[40px] w-[56px] h-[56px] flex items-center justify-center rounded-[8px]`}
        >
          <Image src={sources[2]} alt={link[2].text} width={40} height={40} />
        </div>
        <div
          className={`rotate-left ${link[3].color} top-[-20px] left-[80px] absolute max-md:w-[40px] max-md:h-[40px] w-[56px] h-[56px] flex items-center justify-center rounded-[8px]`}
        >
          <Image src={sources[3]} alt={link[3].text} width={40} height={40} />
        </div>
        <div
          className={`rotate-left ${link[4].color} top-[-92px] left-[-92px] absolute max-md:w-[40px] max-md:h-[40px] w-[56px] h-[56px] flex items-center justify-center rounded-[8px]`}
        >
          <Image src={sources[4]} alt={link[4].text} width={40} height={40} />
        </div>
        <div
          className={`rotate-left ${link[5].color} top-[52px] left-[52px] absolute max-md:w-[40px] max-md:h-[40px] w-[56px] h-[56px] flex items-center justify-center rounded-[8px]`}
        >
          <Image src={sources[5]} alt={link[5].text} width={40} height={40} />
        </div>
        <div
          className={`rotate-left ${link[6].color} top-[-92px] left-[52px] absolute max-md:w-[40px] max-md:h-[40px] w-[56px] h-[56px] flex items-center justify-center rounded-[8px]`}
        >
          <Image src={sources[6]} alt={link[6].text} width={40} height={40} />
        </div>
        <div
          className={`rotate-left ${link[7].color} top-[52px] left-[-92px] absolute max-md:w-[40px] max-md:h-[40px] w-[56px] h-[56px] flex items-center justify-center rounded-[8px]`}
        >
          <Image src={sources[7]} alt={link[7].text} width={40} height={40} />
        </div>
      </article>
    </div>
  );
};

export default MixButton;
