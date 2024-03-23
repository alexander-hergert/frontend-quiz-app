"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import GlobalContext from "@/context/globalContext";

const metadata = {
  title: "Frontend Quiz App",
  description: "A quiz app for frontend developers",
};

export default function RootLayout({ children }) {
  let htmlElement;
  let shuffle = false;

  if (typeof window !== "undefined") {
    htmlElement = document.querySelector("html");
    shuffle = localStorage.getItem("isShuffle");
  }

  const [theme, setTheme] = useState("light");
  const [isShuffle, setIsShuffle] = useState(shuffle);

  return (
    <html lang="en" data-theme={"light"} className="bg-secondary">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`flex flex-col justify-center items-center min-h-[100vh]
        ${theme === "dark" ? "d-bg-d t-bg-d m-bg-d" : "d-bg-l t-bg-l m-bg-l"}
      `}
      >
        <GlobalContext.Provider value={{ isShuffle, setIsShuffle }}>
          <Navbar theme={theme} setTheme={setTheme} />
          <main className="min-h-[100vh] max-xl:mb-12">{children}</main>
        </GlobalContext.Provider>
      </body>
    </html>
  );
}
