"use client";
import React from "react";
import { useContext } from "react";
import GlobalContext from "@/context/globalContext";

const Settings = () => {
  const { isShuffle, setIsShuffle } = useContext(GlobalContext);
  return (
    <section className="text-accent flex flex-col justify-center items-center settings mt-4">
      <h1 className="text-2xl">Settings</h1>
      <div className="flex gap-4 mt-4">
        <p>Shuffle mode</p>
        <input
          onChange={() => {
            setIsShuffle(!isShuffle);
            localStorage.setItem("isShuffle", !isShuffle);
          }}
          type="checkbox"
          className="w-[48px] h-[28px] border-none cursor-pointer"
          checked={Boolean(isShuffle)}
        />
      </div>
    </section>
  );
};

export default Settings;
