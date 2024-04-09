import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import QuizButton from "../src/components/QuizButton";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("QuizButton", () => {
  // Mock useRouter hook
  const pushMock = jest.fn();
  useRouter.mockReturnValue({
    push: pushMock,
  });

  it("renders correctly", () => {
    const link = {
      path: "/html",
      text: "HTML",
      picture: "/path/to/picture",
      color: "red",
    };
    render(<QuizButton link={link} />);
    expect(screen.getByRole("quiz-button")).toBeInTheDocument();
  });

  it("displays the correct text", () => {
    const link = {
      path: "/html",
      text: "HTML",
      picture: "/path/to/picture",
      color: "red",
    };
    render(<QuizButton link={link} />);
    expect(screen.getByText("HTML")).toBeInTheDocument();
  });

  it("calls router.push on click", () => {
    const link = {
      path: "/html",
      text: "HTML",
      picture: "/path/to/picture",
      color: "red",
    };

    render(<QuizButton link={link} />);
    fireEvent.click(screen.getByRole("quiz-button"));
    expect(pushMock).toHaveBeenCalledWith("/html", { scroll: false });
  });
});
