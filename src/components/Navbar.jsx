"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import sun from "/public/assets/images/icon-sun-light.svg";
import moon from "/public/assets/images/icon-moon-light.svg";
import darkSun from "/public/assets/images/icon-sun-dark.svg";
import darkMoon from "/public/assets/images/icon-moon-dark.svg";

const Navbar = () => {
  const htmlElement = document.querySelector("html");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  //set theme on initial render
  useEffect(() => {
    htmlElement.dataset.theme = theme;
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
      <div>Quiz topic!</div>
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
          checked={theme === "dark" ? true : false}
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
