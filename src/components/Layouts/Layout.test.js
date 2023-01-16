import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Layout component", () => {
  test("Render component", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const layoutEl = screen.getByTestId("layout");
    expect(layoutEl).toBeInTheDocument();
  });

  test("Layout renders Header Component", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const layoutEl = document.getElementsByClassName("header").item(0);
    expect(layoutEl).toBeInTheDocument();
  });

  test("Layout renders Footer Component", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const layoutEl = document.getElementsByClassName("footer").item(0);
    expect(layoutEl).toBeInTheDocument();
  });
});
