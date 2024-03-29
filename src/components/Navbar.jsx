"use client";
import { useEffect } from "react";
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
import react from "/public/assets/images/icon-react.svg";
import nodejs from "/public/assets/images/icon-nodejs.svg";
import sql from "/public/assets/images/icon-sql.svg";
import git from "/public/assets/images/icon-gitbash.svg";

const Navbar = ({ theme, setTheme }) => {
  let htmlElement;
  if (typeof window !== "undefined") {
    htmlElement = document.querySelector("html");
  }

  const pathname = usePathname();

  //set theme on initial render
  useEffect(() => {
    if (htmlElement) {
      htmlElement.dataset.theme = theme;
      setTheme(localStorage.getItem("theme"));
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
    <nav
      className="flex justify-between max-ms:mb-[32px] max-md:py-[26px] md:py-[52px] xl:py-[98px] max-md:w-[327px] 
    md:w-[640px] xl:w-[1160px] text-neutral"
    >
      {/* Add the quiz buttons here */}
      {pathname === "/" && <div></div>}
      {pathname === "/html" && (
        <div className="flex gap-4 items-center">
          <div className="bg-html rounded p-1">
            <Image src={html} alt="html-icon" />
          </div>
          <h1 className="text-2xl">HTML</h1>
        </div>
      )}
      {pathname === "/css" && (
        <div className="flex gap-4 items-center">
          <div className="bg-css rounded p-1">
            <Image src={css} alt="css-icon" />
          </div>
          <h1 className="text-2xl">CSS</h1>
        </div>
      )}
      {pathname === "/javascript" && (
        <div className="flex gap-4 items-center">
          <div className="bg-js rounded p-1">
            <Image src={js} alt="js-icon" />
          </div>
          <h1 className="text-2xl">Javascript</h1>
        </div>
      )}
      {pathname === "/accessibility" && (
        <div className="flex gap-4 items-center">
          <div className="bg-accessibility rounded p-1">
            <Image src={accessibility} alt="accessibility-icon" />
          </div>
          <h1 className="text-2xl">Accessibility</h1>
        </div>
      )}
      {pathname === "/react" && (
        <div className="flex gap-4 items-center">
          <div className="bg-react rounded p-1">
            <Image src={react} alt="react-icon" />
          </div>
          <h1 className="text-2xl">React</h1>
        </div>
      )}
      {pathname === "/nodejs" && (
        <div className="flex gap-4 items-center">
          <div className="bg-nodejs rounded p-1">
            <Image src={nodejs} alt="nodejs-icon" />
          </div>
          <h1 className="text-2xl">Node.js</h1>
        </div>
      )}
      {pathname === "/sql" && (
        <div className="flex gap-4 items-center">
          <div className="bg-sql rounded p-1">
            <Image src={sql} alt="sql-icon" />
          </div>
          <h1 className="text-2xl">SQL</h1>
        </div>
      )}
      {pathname === "/git" && (
        <div className="flex gap-4 items-center">
          <div className="bg-git rounded p-1">
            <Image src={git} alt="git-icon" />
          </div>
          <h1 className="text-2xl">Git</h1>
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
          className="w-[48px] h-[28px] border-none cursor-pointer"
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
