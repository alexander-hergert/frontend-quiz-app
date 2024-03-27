import React, { createContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={{
        isShuffle,
        setIsShuffle,
        numberOfQuestions,
        setNumberOfQuestions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
