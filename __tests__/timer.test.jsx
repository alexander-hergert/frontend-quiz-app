import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import Timer from "../src/components/Timer";
import GlobalContext from "../src/context/globalContext";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllMocks();
  jest.useRealTimers();
});

describe("Timer", () => {
  describe("Rendering", () => {
    // Mock GlobalContext values
    const values = {
      numberOfQuestions: 10,
    };
    it("should render Timer component correctly", () => {
      render(
        <GlobalContext.Provider value={values}>
          <Timer />
        </GlobalContext.Provider>
      );
      expect(screen.getByTestId("timer")).toBeInTheDocument();
    });
    // Test if the Timer component renders correctly
    describe("Functions", () => {
      // Mock GlobalContext values
      const values = {
        numberOfQuestions: 10,
      };
      it("should decrement timer correctly", () => {
        render(
          <GlobalContext.Provider value={values}>
            <Timer />
          </GlobalContext.Provider>
        );
        expect(screen.getByTestId("minutes")).toHaveTextContent("10");
        expect(screen.getByTestId("seconds")).toHaveTextContent("0");

        act(() => {
          jest.advanceTimersByTime(2000);
        });

        //expect(screen.getByTestId("minutes")).toHaveTextContent("8");
        expect(screen.getByTestId("seconds")).toHaveTextContent("58");
      });
      // Test when the timer reaches 0
      //   it("should reach 0 and call setCurrentQuestion", () => {
      //     const setCurrentQuestion = jest.fn();
      //     render(
      //       <GlobalContext.Provider value={values}>
      //         <Timer setCurrentQuestion={setCurrentQuestion} />
      //       </GlobalContext.Provider>
      //     );
      //     act(() => {
      //       jest.advanceTimersByTime(600000);
      //     });
      //     // Assert that the timer values have reached 0
      //     expect(screen.getByTestId("minutes")).toHaveTextContent("0");
      //     expect(screen.getByTestId("seconds")).toHaveTextContent("0");
      //     // Expect setCurrentQuestion to be called with 11
      //     expect(setCurrentQuestion).toHaveBeenCalledWith(11);
      //   });
    });
  });
});
