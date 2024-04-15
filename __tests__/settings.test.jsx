import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import GlobalContext from "../src/context/globalContext";
import Settings from "../src/components/Settings";

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
  selectedTopics: [],
  setSelectedTopics: jest.fn(),
};

describe("Settings Component", () => {
  //clear mocks after each
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("should render Settings component correctly", () => {
      render(
        <GlobalContext.Provider value={values}>
          <Settings />
        </GlobalContext.Provider>
      );
      expect(screen.getByTestId("settings")).toBeInTheDocument();
    });
  });

  describe("Functionality", () => {
    it("should call setIsShuffle when shuffle mode is toggled and toggle the input", () => {
      render(
        <GlobalContext.Provider value={values}>
          <Settings />
        </GlobalContext.Provider>
      );
      expect(screen.getByTestId("shuffle")).not.toBeChecked();
      fireEvent.click(screen.getByTestId("shuffle"));
      expect(values.setIsShuffle).toHaveBeenCalledWith("true");
      expect(screen.getByTestId("shuffle").value).toBe("on");
    });

    for (let i = 10; i <= 30; i += 10) {
      it("should call setNumberOfQuestions when number of questions is changed", () => {
        const newValues = {
          ...values,
          numberOfQuestions: i,
        };
        render(
          <GlobalContext.Provider value={newValues}>
            <Settings />
          </GlobalContext.Provider>
        );
        fireEvent.click(screen.getByTestId(`number-of-questions-${i}`));
        expect(screen.getByTestId(`number-of-questions-${i}`).value).toBe(
          newValues.numberOfQuestions.toString()
        );
        expect(screen.getByTestId(`number-of-questions-${i}`).value).toBe(
          newValues.numberOfQuestions.toString()
        );
      });
    }

    it("should call setIsExam when exam mode is toggled and toggle the input", () => {
      render(
        <GlobalContext.Provider value={values}>
          <Settings />
        </GlobalContext.Provider>
      );
      expect(screen.getByTestId("exam")).not.toBeChecked();
      fireEvent.click(screen.getByTestId("exam"));
      expect(values.setIsExam).toHaveBeenCalledWith("true");
      expect(screen.getByTestId("exam").value).toBe("on");
    });
  });

  it("should call setIsMixMode when mix mode is toggled and toggle the input", () => {
    render(
      <GlobalContext.Provider value={values}>
        <Settings />
      </GlobalContext.Provider>
    );
    expect(screen.getByTestId("mix-mode")).not.toBeChecked();
    fireEvent.click(screen.getByTestId("mix-mode"));
    expect(values.setIsMixMode).toHaveBeenCalledWith("true");
    expect(screen.getByTestId("mix-mode").value).toBe("on");
  });

  //test selected topics
  it("should call setSelectedTopics when a topic is selected", () => {
    const newValues = {
      ...values,
      isMixMode: "true",
    };
    render(
      <GlobalContext.Provider value={newValues}>
        <Settings />
      </GlobalContext.Provider>
    );
    fireEvent.click(screen.getByLabelText("HTML"));
    expect(values.setSelectedTopics).toHaveBeenCalledWith(["HTML"]);
  });
  it("should call setSelectedTopics when a topic is selected", () => {
    const newValues = {
      ...values,
      isMixMode: "true",
      selectedTopics: ["HTML"],
    };
    render(
      <GlobalContext.Provider value={newValues}>
        <Settings />
      </GlobalContext.Provider>
    );
    fireEvent.click(screen.getByLabelText("CSS"));
    expect(values.setSelectedTopics).toHaveBeenCalledWith(["HTML", "CSS"]);
  });

  it("should call setSelectedTopics when a topic is deselected", () => {
    const newValues = {
      ...values,
      isMixMode: "true",
      selectedTopics: ["HTML", "CSS"],
    };
    render(
      <GlobalContext.Provider value={newValues}>
        <Settings />
      </GlobalContext.Provider>
    );
    fireEvent.click(screen.getByLabelText("CSS"));
    expect(values.setSelectedTopics).toHaveBeenCalledWith(["HTML"]);
  });
});
