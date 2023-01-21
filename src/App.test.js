import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routesConfig from "./data/routesConfig";
import App from "./App";

describe("App", () => {
  test("Render Layout", () => {
    render(<App />);
    const layoutEl = screen.getByTestId("layout");
    expect(layoutEl).toBeInTheDocument();
  });

  test("Render Home", () => {
    render(<App />);
    const layoutEl = document.getElementsByClassName("home").item(0);
    expect(layoutEl).toBeInTheDocument();
  });

  test("Render Header component", () => {
    render(<App />);
    const headerEl = document.getElementsByClassName("header").item(0);
    expect(headerEl).toBeInTheDocument();
  });

  test("Render Footer component", () => {
    render(<App />);
    const footerEl = document.getElementsByClassName("footer").item(0);
    expect(footerEl).toBeInTheDocument();
  });

  test("Render Product Page with parameter", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/product/mechanical-0-7-pencil"],
    });
    render(<RouterProvider router={router} />);
    const containerEl = document
      .getElementsByClassName("productContainer")
      .item(0);
    expect(containerEl).toBeInTheDocument();
  });

  test("Render Cart Page", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/cart"],
    });
    render(<RouterProvider router={router} />);
    const containerEl = document
      .getElementsByClassName("cartPageContainer")
      .item(0);
    expect(containerEl).toBeInTheDocument();
  });

  test("Render Checkout Page", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/checkout"],
    });
    render(<RouterProvider router={router} />);
    const containerEl = document
      .getElementsByClassName("checkoutContainer")
      .item(0);
    expect(containerEl).toBeInTheDocument();
  });

  test("Render 404 Page", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/404"],
    });
    render(<RouterProvider router={router} />);
    const containerEl = document.getElementsByClassName("notFound").item(0);
    expect(containerEl).toBeInTheDocument();
  });


  test("When Click CartButton div Opens CartMenu", () => {
    render(<App />);
    const cartButtonEl = document.getElementsByClassName("cartButton").item(0);
    expect(cartButtonEl).toBeInTheDocument();
    userEvent.click(cartButtonEl);
    const cartMenuEl = document.getElementsByClassName("cartMenu").item(0);
    expect(cartMenuEl).toBeInTheDocument();
  });

  test("Click outside and CartMenu Close", () => {
    render(<App />);
    const cartButtonEl = document.getElementsByClassName("cartButton").item(0);
    expect(cartButtonEl).toBeInTheDocument();
    userEvent.click(cartButtonEl);
    const cartMenuEl = document.getElementsByClassName("cartMenu").item(0);
    expect(cartMenuEl).toBeInTheDocument();
    const homeEl = document.getElementsByClassName("home").item(0);
    expect(homeEl).toBeInTheDocument();
    userEvent.click(homeEl);
    expect(cartMenuEl).not.toBeInTheDocument();
  });

  test("Open Cartmenu and Click View Cart and Go to Cart Page", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    const cartButtonEl = document.getElementsByClassName("cartButton").item(0);
    expect(cartButtonEl).toBeInTheDocument();
    userEvent.click(cartButtonEl);
    const cartMenuEl = document.getElementsByClassName("cartMenu").item(0);
    expect(cartMenuEl).toBeInTheDocument();
    const cartLinkEl = screen.getByText("View Cart");
    expect(cartLinkEl).toBeInTheDocument();
    userEvent.click(cartLinkEl);
    const cartPageEl = screen.getByText(
      /you can add or remove your items in shopping cart/i
    );
    expect(cartPageEl).toBeInTheDocument();
  });

  test("Open Cartmenu and Click Checkout and Go to Checkout Page", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    const cartButtonEl = document.getElementsByClassName("cartButton").item(0);
    expect(cartButtonEl).toBeInTheDocument();
    userEvent.click(cartButtonEl);
    const cartMenuEl = document.getElementsByClassName("cartMenu").item(0);
    expect(cartMenuEl).toBeInTheDocument();
    const cartLinkEl = screen.getByText("Checkout");
    expect(cartLinkEl).toBeInTheDocument();
    userEvent.click(cartLinkEl);
    const cartPageEl = screen.getByText(
      /please enter your contact, shipping address and payment informations/i
    );
    expect(cartPageEl).toBeInTheDocument();
  });
});
