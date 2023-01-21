import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Checkout from "./Checkout";

describe("Checkout Page", () => {
  test("Render Checkout Page", () => {
    render(
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    );
    const headerEl = screen.getByText("Checkout");
    expect(headerEl).toBeInTheDocument();
  });

  test("Render Checkout Form", () => {
    render(
      <MemoryRouter>
        <Checkout />
      </MemoryRouter>
    );
    const formDivEl = document.getElementsByClassName("checkoutForm").item(0);
    expect(formDivEl).toBeInTheDocument();
  });
});
