import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Cart from "./Cart";

describe("Cart Page", () => {
  test("Render Cart Page", () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    const headerEl = screen.getByText("Shopping Cart");
    expect(headerEl).toBeInTheDocument();
  });

  test("Render Summary component", () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    const summaryEl = document.getElementsByClassName("summary").item(0);
    expect(summaryEl).toBeInTheDocument();
  });

  test("Render Checkout Button", () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    const checkoutEl = screen.getByText(/checkout/i);
    expect(checkoutEl).toBeInTheDocument();
  });
});
