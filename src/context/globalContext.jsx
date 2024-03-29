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
        isExam,
        setIsExam,
        isMixMode,
        setIsMixMode,
        selectedTopics,
        setSelectedTopics,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
