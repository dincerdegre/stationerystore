import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home Page", () => {

  test("Render Home Page", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const homeEl = document.getElementsByClassName("home").item(0);
    expect(homeEl).toBeInTheDocument();
  });

  test("Render Slider", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const sliderEl = document.getElementsByClassName("slider").item(0);
    expect(sliderEl).toBeInTheDocument();
  });

  test("Render Newsletter", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const newsletterEl = document.getElementsByClassName("newsletter").item(0);
    expect(newsletterEl).toBeInTheDocument();
  });

  test("Render Categories", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const categoriesEl = document.getElementsByClassName("categories").item(0);
    expect(categoriesEl).toBeInTheDocument();
  });

  test("Render Products", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const productsEl = document.getElementsByClassName("products").item(0);
    expect(productsEl).toBeInTheDocument();
  });

});
