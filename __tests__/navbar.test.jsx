import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../src/components/Navbar";
import GlobalContext from "../src/context/globalContext";
import { usePathname } from "next/navigation";

// Mock usePathname
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Navbar Component", () => {
  describe("Rendering", () => {
    // Test if the Navbar component renders correctly
    it("should render Navbar component correctly", () => {
      // Mock usePathname to return "/html"
      usePathname.mockReturnValue("/html");
      // Mock GlobalContext values
      const themeItems = {
        theme: "dark",
        setTheme: jest.fn(),
      };
      render(
        <GlobalContext.Provider value={themeItems}>
          <Navbar />
        </GlobalContext.Provider>
      );
      expect(screen.getByTestId("navbar")).toBeInTheDocument();
      expect(screen.getByTestId("theme-button")).toBeInTheDocument();
      expect(screen.getByRole("logo")).toBeInTheDocument();
    });
  });

  describe("Theme Toggling", () => {
    // Test if the theme toggles correctly
    it("should toggle theme to light when button is clicked", () => {
      const themeItems = {
        theme: "dark",
        setTheme: jest.fn(),
      };
      render(
        <GlobalContext.Provider value={themeItems}>
          <Navbar />
        </GlobalContext.Provider>
      );
      const themeButton = screen.getByTestId("theme-button");
      fireEvent.click(themeButton);
      expect(themeItems.setTheme).toHaveBeenCalledWith("light");
    });
    // Test if the theme toggles back to dark when button is clicked again
    it("should toggle theme back to dark when button is clicked again", () => {
      const themeItems = {
        theme: "light",
        setTheme: jest.fn(),
      };
      render(
        <GlobalContext.Provider value={themeItems}>
          <Navbar />
        </GlobalContext.Provider>
      );
      const themeButton = screen.getByTestId("theme-button");
      fireEvent.click(themeButton);
      expect(themeItems.setTheme).toHaveBeenCalledWith("dark");
      fireEvent.click(themeButton);
      expect(themeItems.setTheme).toHaveBeenCalledWith("light");
    });
  });
});
