"use client";
import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "@/context/globalContext";
import { usePathname } from "next/navigation";
import Image from "next/image";
import sun from "/public/assets/images/icon-sun-light.svg";
import moon from "/public/assets/images/icon-moon-light.svg";
import darkSun from "/public/assets/images/icon-sun-dark.svg";
import darkMoon from "/public/assets/images/icon-moon-dark.svg";
import { link } from "./QuizButtons";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useContext(GlobalContext);

  let htmlElement;
  if (typeof window !== "undefined") {
    htmlElement = document.querySelector("html");
  }

  useEffect(() => {
    setIsClient(true);
    if (htmlElement) {
      htmlElement.dataset.theme = theme;
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  //toggle theme
  const toggleTheme = () => {
    if (htmlElement) {
      if (theme === "light") {
        htmlElement.dataset.theme = "dark";
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        htmlElement.dataset.theme = "light";
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  };

  return (
    <nav
      data-testid="navbar"
      className="flex justify-between max-ms:mb-[32px] max-md:py-[26px] md:py-[52px] xl:py-[98px] max-md:w-[327px] 
    md:w-[640px] xl:w-[1160px] text-neutral"
    >
      {pathname === "/" && <div role="logo" aria-label="hidden"></div>}
      {link.map((link, index) => {
        if (pathname === link.path) {
          return (
            <div role="logo" key={index} className="flex gap-4 items-center">
              <div className={link.color + " rounded p-1"}>
                <Image src={link.picture} alt={link.text + "-icon"} />
              </div>
              <h1 className="text-2xl">{link.text}</h1>
            </div>
          );
        }
      })}
      <div className="flex gap-2 items-center">
        {isClient && theme === "light" ? (
          <Image src={darkSun} alt="sun-icon" />
        ) : (
          <Image src={sun} alt="sun-icon" />
        )}
        <input
          data-testid="theme-button"
          onChange={toggleTheme}
          type="checkbox"
          className="w-[48px] h-[28px] border-none cursor-pointer"
          checked={theme === "dark" ? true : false}
        />
        {isClient && theme === "light" ? (
          <Image src={darkMoon} alt="moon-icon" />
        ) : (
          <Image src={moon} alt="moon-icon" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
