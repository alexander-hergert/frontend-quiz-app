import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import MixButton from "../src/components/MixButton";
import { useRouter } from "next/navigation";

// Mock useRouter hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("MixButton Component", () => {
  // Mock useRouter hook
  const pushMock = jest.fn();
  useRouter.mockReturnValue({
    push: pushMock,
  });

  //clear mocks after each
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("should render MixButton component correctly", () => {
      render(<MixButton />);
      expect(screen.getByTestId("mix-button")).toBeInTheDocument();
    });
  });

  describe("Functionality", () => {
    it("should push to /mix when selectedTopics is not empty", () => {
      const selectedTopics = ["HTML", "CSS"];

      render(<MixButton selectedTopics={selectedTopics} />);

      fireEvent.click(screen.getByTestId("mix-button"));
      expect(pushMock).toHaveBeenCalledWith("/mix", { scroll: false });
    });

    it("should not push to /mix when selectedTopics is empty", () => {
      const selectedTopics = [];

      render(<MixButton selectedTopics={selectedTopics} />);

      fireEvent.click(screen.getByTestId("mix-button"));
      expect(pushMock).not.toHaveBeenCalled();
    });
  });
});
