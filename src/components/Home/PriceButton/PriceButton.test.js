import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PriceButton from "./PriceButton";

describe("PriceButton Component", () => {

  test('Render "PriceButton" component', () => {
    render(<PriceButton price="0.99" oldPrice="1.99" />);
    const priceEl = screen.getByText(/0.99/i,{exact:false});
    expect(priceEl).toBeInTheDocument();
    const oldPriceEl = screen.getByText(/1.99/i,{exact:false});
    expect(oldPriceEl).toBeInTheDocument();
  });

  test('Should call onClick callback', () => {
    const onClick = jest.fn();
    render(<PriceButton price="0.99" oldPrice="1.99" onClick={onClick} />);
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    expect(onClick).toHaveBeenCalled();
  });
});
