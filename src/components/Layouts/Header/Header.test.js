import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import userEvent from "@testing-library/user-event";

describe("Header component", () => {
  test("Render Header", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const headerEl = screen.getByText(/stationary store/i);
    expect(headerEl).toBeInTheDocument();
  });

  test("Header renders Navbar Component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const navbarEl = document.getElementsByClassName("navbar").item(0);
    expect(navbarEl).toBeInTheDocument();
  });

  test("Header renders HeaderRight Component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const navbarEl = document.getElementsByClassName("searchButton").item(0);
    expect(navbarEl).toBeInTheDocument();
  });

  test("Header renders CartMenu when Click cartButton", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const cartButtonEl = document.getElementsByClassName("cartButton").item(0);
    userEvent.click(cartButtonEl);
    const cartMenu = await screen.findByText("Shopping Cart");
    expect(cartMenu).toBeInTheDocument();
  });
  
});
