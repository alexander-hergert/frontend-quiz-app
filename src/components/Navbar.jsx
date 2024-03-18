"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import sun from "/public/assets/images/icon-sun-light.svg";
import moon from "/public/assets/images/icon-moon-light.svg";
import darkSun from "/public/assets/images/icon-sun-dark.svg";
import darkMoon from "/public/assets/images/icon-moon-dark.svg";
import html from "/public/assets/images/icon-html.svg";
import css from "/public/assets/images/icon-css.svg";
import js from "/public/assets/images/icon-js.svg";
import accessibility from "/public/assets/images/icon-accessibility.svg";

const Navbar = () => {
  let htmlElement;
  let storedTheme;

  if (typeof window !== "undefined") {
    htmlElement = document.querySelector("html");
    storedTheme = localStorage.getItem("theme");
  }

  const [theme, setTheme] = useState(storedTheme || "light");
  const pathname = usePathname();

  //set theme on initial render
  useEffect(() => {
    if (htmlElement) {
      htmlElement.dataset.theme = theme;
    }
  }, [theme]);

  //toggle theme
  const toggleTheme = () => {
    if (theme === "light") {
      htmlElement.dataset.theme = "dark";
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.dataset.theme = "light";
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="flex justify-between">
      {/* Add the quiz buttons here */}
      {pathname === "/" && <div></div>}
      {pathname === "/html" && (
        <div className="flex gap-4 items-center">
          <div className="bg-red-100 rounded p-1">
            <Image src={html} alt="html-icon" />
          </div>
          <h1 className="text-2xl">HTML</h1>
        </div>
      )}
      {pathname === "/css" && (
        <div className="flex gap-4">
          <div className="bg-blue-100 rounded p-1">
            <Image src={css} alt="css-icon" />
          </div>
          <h1 className="text-2xl">CSS</h1>
        </div>
      )}
      {pathname === "/javascript" && (
        <div className="flex gap-4">
          <div className="bg-yellow-100 rounded p-1">
            <Image src={js} alt="js-icon" />
          </div>
          <h1 className="text-2xl">Javascript</h1>
        </div>
      )}
      {pathname === "/accessibility" && (
        <div className="flex gap-4">
          <div className="bg-green-100 rounded p-1">
            <Image src={accessibility} alt="accessibility-icon" />
          </div>
          <h1 className="text-2xl">Accessibility</h1>
        </div>
      )}
      {/* Add the toggle theme button here */}
      <div className="flex gap-2 items-center">
        {theme === "light" ? (
          <Image src={darkSun} alt="sun-icon" />
        ) : (
          <Image src={sun} alt="sun-icon" />
        )}
        <input
          onChange={toggleTheme}
          type="checkbox"
          className="toggle"
          checked={storedTheme === "dark" ? true : false}
        />
        {theme === "light" ? (
          <Image src={darkMoon} alt="moon-icon" />
        ) : (
          <Image src={moon} alt="moon-icon" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
