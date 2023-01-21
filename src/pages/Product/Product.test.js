import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "./Product";
import { MemoryRouter } from "react-router-dom";

describe("Product Page", () => {
    
  test("Render Product Page", async () => {
    render(<MemoryRouter><Product /></MemoryRouter>);
    const loaderEl = screen.getByTestId("loader");
    expect(loaderEl).toBeInTheDocument();
    await waitFor(() => {
      expect(loaderEl).not.toBeInTheDocument();
    });
    const detailsEl = screen.getByText(/product details/i);
    expect(detailsEl).toBeInTheDocument();
    const imageEl = document.getElementsByClassName("mainImage").item(0);
    expect(imageEl).toBeInTheDocument()
    const priceEl = document.getElementsByClassName("priceTextContainer").item(0);
    expect(priceEl).toBeInTheDocument();
    const amountEl = document.getElementsByClassName("selectorContainer").item(0);
    expect(amountEl).toBeInTheDocument();
    const addEl = document.getElementsByClassName("addtoCart").item(0);
    expect(addEl).toBeInTheDocument();
  });

});
