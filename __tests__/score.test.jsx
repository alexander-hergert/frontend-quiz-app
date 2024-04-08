import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Score from "../src/components/Score";

describe("Score", () => {
  it("renders correctly", () => {
    render(
      <Score
        score={0}
        icon={"/assets/images/icon-html.svg"}
        title={"HTML"}
        numberOfQuestions={10}
      />
    );
    expect(screen.getByTestId("score")).toBeInTheDocument();
    expect(screen.getByTestId("score")).toHaveTextContent("0");
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toHaveAttribute(
      "src",
      "/assets/images/icon-html.svg"
    );
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveTextContent("HTML");
    expect(screen.getByTestId("numberofquestions")).toBeInTheDocument();
    expect(screen.getByTestId("numberofquestions")).toHaveTextContent(
      "out of 10"
    );
  });
  //background color
  it("renders background color correctly", () => {
    render(
      <Score
        score={0}
        icon={"/assets/images/icon-html.svg"}
        title={"HTML"}
        numberOfQuestions={10}
      />
    );
    expect(screen.getByTestId("background")).toHaveClass("bg-html");
  });
  //test Link to route to /
  it("renders link correctly", () => {
    render(
      <Score
        score={0}
        icon={"/assets/images/icon-html.svg"}
        title={"HTML"}
        numberOfQuestions={10}
      />
    );
    expect(screen.getByTestId("link")).toHaveAttribute("href", "/");
  });

  //snapshot test
  it("renders unchanged", () => {
    const { container } = render(
      <Score
        score={0}
        icon={"/assets/images/icon-html.svg"}
        title={"HTML"}
        numberOfQuestions={10}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
