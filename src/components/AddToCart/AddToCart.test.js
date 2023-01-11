import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import AddToCart from "./AddToCart";

describe('AddToCart component',()=>{
    test('Render component',()=>{
        render(<AddToCart />);
        const addToCartEl = screen.getByText("Add to Cart");
        expect(addToCartEl).toBeInTheDocument();
    });
    
    test('Render AddShoppingCartIcon',()=>{
        render(<AddToCart />);
        const addToCartIconEl = screen.getByTestId("AddShoppingCartIcon");
        expect(addToCartIconEl).toBeInTheDocument();
    });

    test('Should call onClick when the AddtoCart is clicked',()=>{
        const onClick = jest.fn();
        render(<AddToCart onClick={onClick} />);
        const buttonEl = screen.getByText("Add to Cart");
        userEvent.click(buttonEl);
        expect(onClick).toHaveBeenCalled();
    });
});