import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import CartMenu from "./CartMenu";

describe("CartMenu component", () => {
    test("Render component", () => {
        const onCartClose = jest.fn();
        render(<MemoryRouter><CartMenu onCartClose={onCartClose} /></MemoryRouter>);
        const cartMenuEl = document.getElementsByClassName("cartMenu").item(0);
        expect(cartMenuEl).toBeInTheDocument();
    });

    test("Component have Cart is Empty Text", () => {
        const onCartClose = jest.fn();
        render(<MemoryRouter><CartMenu onCartClose={onCartClose} /></MemoryRouter>);
        const cartEmptyEl = screen.getByText(/cart is empty/i);
        expect(cartEmptyEl).toBeInTheDocument();
    });

});