import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  test("Render component", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const navbarEl = document.getElementsByClassName("navbar").item(0);
    expect(navbarEl).toBeInTheDocument();
  });
});
