import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import AmountSelector from "./AmountSelector";

describe('AmountSelector component',()=>{
    test('Render component',()=>{
        const onClick = jest.fn();
        render(<AmountSelector onAmountChange={onClick} />);
        const selector = document.getElementsByClassName("selectorContainer").item(0);
        expect(selector).toBeInTheDocument();
    });

    test('Should call onClick when the + Button is clicked',()=>{
        const onClick = jest.fn();
        render(<AmountSelector onAmountChange={onClick} />);
        const IncreaseEl = screen.getByText("+");
        expect(IncreaseEl).toBeInTheDocument();
        userEvent.click(IncreaseEl);
        expect(onClick).toHaveBeenCalled();
    });

    test('Should call onClick when the - Button is clicked',()=>{
        const onClick = jest.fn();
        render(<AmountSelector onAmountChange={onClick} />);
        const decreaseEl = screen.getByText("-");
        expect(decreaseEl).toBeInTheDocument();
        userEvent.click(decreaseEl);
        expect(onClick).toHaveBeenCalled();
    });

    test('Change value when +/- Button is clicked',()=>{
        const onClick = jest.fn();
        render(<AmountSelector onAmountChange={onClick} />);
        const value = screen.getByTestId("value").innerHTML;
        expect(value).toEqual("1");
        const IncreaseEl = screen.getByText("+");
        userEvent.click(IncreaseEl);
        const increaseValue = screen.getByTestId("value").innerHTML;
        expect(increaseValue).toEqual("2");
        const decreaseEl = screen.getByText("-");
        userEvent.click(decreaseEl);
        const decreaseValue = screen.getByTestId("value").innerHTML;
        expect(decreaseValue).toEqual("1");
    });
});