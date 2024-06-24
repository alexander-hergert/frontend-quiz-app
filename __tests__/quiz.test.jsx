import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import GlobalContext from "../src/context/globalContext";
import { usePathname, useRouter } from "next/navigation";
import Quiz from "../src/components/Quiz";
import { shuffleArray } from "@/app/utils/utils";
import data from "@/api/data.json";
import React, { useState } from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

window.scrollTo = jest.fn();
shuffleArray.slice = jest.fn();

//Mock GlobalContext values
const values = {
  isShuffle: "false",
  setIsShuffle: jest.fn(),
  numberOfQuestions: 20,
  setNumberOfQuestions: jest.fn(),
  isExam: "false",
  setIsExam: jest.fn(),
  isMixMode: "false",
  setIsMixMode: jest.fn(),
  selectedTopics: ["HTML"],
  setSelectedTopics: jest.fn(),
};

describe("Quiz Component", () => {
  beforeEach(() => {
    useState.mockImplementation(jest.requireActual("react").useState);
  });
  //clear mocks after each
  afterEach(() => {
    jest.clearAllMocks();
  });

  useRouter.mockReturnValue({
    push: jest.fn(),
  });

  usePathname.mockReturnValue("/html");

  describe("Rendering", () => {
    it("should render Quiz component correctly", () => {
      render(
        <GlobalContext.Provider value={values}>
          <Quiz />
        </GlobalContext.Provider>
      );
      expect(screen.getByTestId("quiz")).toBeInTheDocument();
    });
  });

  describe("Functionality", () => {
    it("sets questions and icon based on pathname", () => {
      render(
        <GlobalContext.Provider value={values}>
          <Quiz data={data} />
        </GlobalContext.Provider>
      );
      expect(screen.getByText("Question 1 of 20")).toBeInTheDocument();
    });

    it("should handle the next question", () => {
      render(
        <GlobalContext.Provider value={values}>
          <Quiz data={data} />
        </GlobalContext.Provider>
      );
      fireEvent.click(screen.getByTestId("question-0-1"));
      fireEvent.click(screen.getByText("Submit Answer"));
      fireEvent.click(screen.getByText("Next Question"));
      expect(screen.getByText("Question 2 of 20")).toBeInTheDocument();
    });

    it("should not handle the next question", () => {
      render(
        <GlobalContext.Provider value={values}>
          <Quiz data={data} />
        </GlobalContext.Provider>
      );
      fireEvent.click(screen.getByText("Submit Answer"));
      expect(screen.getByText("Please select an answer"));
    });

    it("should test the mixmode", () => {
      values.isMixMode = "true";
      values.selectedTopics = ["HTML", "CSS"];
      usePathname.mockReturnValue("/mix");

      render(
        <GlobalContext.Provider value={values}>
          <Quiz data={data} />
        </GlobalContext.Provider>
      );
      expect(screen.getByText("Question 1 of 20")).toBeInTheDocument();
    });

    it("should return when selected topic is empty and path valid", () => {
      values.selectedTopics = [];
      values.isMixMode = "true";
      usePathname.mockReturnValue("/mix");
      const pushMock = jest.fn();
      useRouter.mockReturnValue({ push: pushMock });

      render(
        <GlobalContext.Provider value={values}>
          <Quiz data={data} />
        </GlobalContext.Provider>
      );
      expect(pushMock).toHaveBeenCalledWith("/");
    });

    it("should return when selected topic is not empty and path invalid", () => {
      values.selectedTopics = ["HTML", "CSS"];
      values.isMixMode = "true";
      usePathname.mockReturnValue("/notvalidpath");
      const pushMock = jest.fn();
      useRouter.mockReturnValue({ push: pushMock });

      render(
        <GlobalContext.Provider value={values}>
          <Quiz data={data} />
        </GlobalContext.Provider>
      );
      expect(pushMock).toHaveBeenCalledWith("/");
    });

    it("should update the score", () => {
      usePathname.mockReturnValue("/html");
      const setScore = jest.fn();
      jest.spyOn(React, "useState").mockImplementation(() => [0, setScore]);
      const setAnswer = jest.fn();
      jest
        .spyOn(React, "useState")
        .mockImplementation(() => ["correct", setAnswer]);
      const setCorrectAnswer = jest.fn();
      jest
        .spyOn(React, "useState")
        .mockImplementation(() => ["correct", setCorrectAnswer]);

      render(
        <GlobalContext.Provider value={values}>
          <Quiz data={data} />
        </GlobalContext.Provider>
      );
      fireEvent.click(screen.getByTestId("question-0-1"));
      fireEvent.click(screen.getByText("Submit Answer"));
      expect(setScore).toHaveBeenCalledWith(1);
    });
  });
});
