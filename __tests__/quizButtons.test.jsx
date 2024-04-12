import "@testing-library/jest-dom";
import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GlobalContext from "../src/context/globalContext";
import QuizButtons from "../src/components/QuizButtons";
import { useRouter } from "next/navigation";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

//Mock GlobalContext values
const values = {
  isMixMode: "false",
  selectedTopics: [],
};

describe("QuizButtons Component", () => {
  beforeEach(() => {
    useState.mockImplementation(jest.requireActual("react").useState);
  });

  describe("Rendering", () => {
    // Test if the QuizButtons component renders correctly
    it("should render QuizButtons component correctly", () => {
      render(
        <GlobalContext.Provider value={values}>
          <QuizButtons />
        </GlobalContext.Provider>
      );

      expect(screen.getByTestId("quiz-buttons")).toBeInTheDocument();
      expect(screen.getByTestId("switch-button")).toBeInTheDocument();
    });
  });

  // Test the functionality of the QuizButtons component
  describe("Functionality", () => {
    it("should switch to the second page and contain correct quiz-buttons", () => {
      const setPage = jest.fn();
      jest.spyOn(React, "useState").mockImplementation(() => [1, setPage]);

      render(
        <GlobalContext.Provider value={values}>
          <QuizButtons />
        </GlobalContext.Provider>
      );
      fireEvent.click(screen.getByTestId("switch-button"));
      expect(setPage).toHaveBeenCalledWith(2);
      expect(screen.getByAltText("HTML")).toBeInTheDocument();
      expect(screen.queryByAltText("React")).not.toBeInTheDocument();
    });

    it("should switch to the first page and contain correct quiz-buttons", () => {
      const setPage = jest.fn();
      jest.spyOn(React, "useState").mockImplementation(() => [2, setPage]);

      render(
        <GlobalContext.Provider value={values}>
          <QuizButtons />
        </GlobalContext.Provider>
      );
      fireEvent.click(screen.getByTestId("switch-button"));
      expect(setPage).toHaveBeenCalledWith(1);
      expect(screen.getByAltText("React")).toBeInTheDocument();
      expect(screen.queryByAltText("HTML")).not.toBeInTheDocument();
    });

    it("should render the mixed quiz button", () => {
      const values = {
        isMixMode: "true",
        selectedTopics: [],
      };

      render(
        <GlobalContext.Provider value={values}>
          <QuizButtons />
        </GlobalContext.Provider>
      );

      expect(screen.getByTestId("mix-button")).toBeInTheDocument();
    });
  });
});
