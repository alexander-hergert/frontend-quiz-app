"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import GlobalContext from "@/context/globalContext";

const metadata = {
  title: "Frontend Quiz App",
  description: "A quiz app for frontend developers",
};

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  let htmlElement;
  let shuffle = false;
  let number = 10;
  let exam = false;
  let mixMode = false;
  let topics = [];
  let themeMode = "dark";

  if (typeof window !== "undefined") {
    htmlElement = document.querySelector("html");
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("isShuffle", shuffle);
      localStorage.setItem("numberOfQuestions", number);
      localStorage.setItem("isExam", exam);
      localStorage.setItem("mixMode", mixMode);
      localStorage.setItem("theme", themeMode);
      localStorage.setItem("topics", JSON.stringify(topics));
    }
    shuffle = localStorage.getItem("isShuffle");
    number = parseInt(localStorage.getItem("numberOfQuestions"));
    exam = localStorage.getItem("isExam");
    mixMode = localStorage.getItem("mixMode");
    topics = JSON.parse(localStorage.getItem("topics"));
    themeMode = localStorage.getItem("theme");
  }

  const [theme, setTheme] = useState(themeMode);
  const [isShuffle, setIsShuffle] = useState(shuffle);
  const [numberOfQuestions, setNumberOfQuestions] = useState(number);
  const [isExam, setIsExam] = useState(exam);
  const [isMixMode, setIsMixMode] = useState(mixMode);
  const [selectedTopics, setSelectedTopics] = useState(topics || []);

  return (
    <html lang="en" data-theme={"light"} className="bg-secondary">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`flex flex-col justify-center items-center min-h-[100vh]
        ${
          isClient && theme === "dark"
            ? "d-bg-d t-bg-d m-bg-d"
            : "d-bg-l t-bg-l m-bg-l"
        }
      `}
      >
        <GlobalContext.Provider
          value={{
            theme,
            setTheme,
            isShuffle,
            setIsShuffle,
            numberOfQuestions,
            setNumberOfQuestions,
            isExam,
            setIsExam,
            isMixMode,
            setIsMixMode,
            selectedTopics,
            setSelectedTopics,
          }}
        >
          <Navbar />
          <main className="min-h-[100vh] max-xl:mb-12">{children}</main>
        </GlobalContext.Provider>
      </body>
    </html>
  );
}
