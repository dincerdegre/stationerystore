import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import HeaderRight from './HeaderRight';

describe("HeaderRight component", () => {
    test("Render component", () => {
        const cartOnClick = jest.fn();
        render(<HeaderRight cartOnClick={cartOnClick} />);
        const searchIconEl = screen.getByTestId("SearchIcon");
        expect(searchIconEl).toBeInTheDocument();
        const personIconEl = screen.getByTestId("PersonOutlineOutlinedIcon");
        expect(personIconEl).toBeInTheDocument();
        const shoppingIconEl = screen.getByTestId("ShoppingCartOutlinedIcon");
        expect(shoppingIconEl).toBeInTheDocument();
        const cartItemEl = document.getElementsByClassName("noSelect").item(0);
        expect(cartItemEl).not.toBeInTheDocument();
    });

    test("Should call cartOnClick when the cartButton div is clicked", () => {
        const cartOnClick = jest.fn();
        render(<HeaderRight cartOnClick={cartOnClick} />);
        const cartButtonDivEl = document.getElementsByClassName("cartButton").item(0);
        userEvent.click(cartButtonDivEl);
        expect(cartOnClick).toHaveBeenCalled();
    });

});