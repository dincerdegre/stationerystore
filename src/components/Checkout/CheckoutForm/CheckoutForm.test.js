import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckoutForm from './CheckoutForm';

describe("CheckoutForm Component", () => {
    
    test('Render "CheckoutForm" component',()=>{
        const submitFn = jest.fn();
        render(<CheckoutForm onSubmit={submitFn} />);
        const checkoutFormEl = screen.getByText(/contact info/i);
        expect(checkoutFormEl).toBeInTheDocument();
        const phoneNumberEl = screen.getByPlaceholderText(/enter phone number/i);
        expect(phoneNumberEl).toBeInTheDocument();
        const emailEl = screen.getByPlaceholderText(/Enter Email Address/i);
        expect(emailEl).toBeInTheDocument();
        const firstNameEl = screen.getByPlaceholderText(/First Name/i);
        expect(firstNameEl).toBeInTheDocument();
        const lastNameEl = screen.getByPlaceholderText(/Last Name/i);
        expect(lastNameEl).toBeInTheDocument();
        const addressEl = screen.getByLabelText(/address/i);
        expect(addressEl).toBeInTheDocument();
        const cardNumberEl = screen.getByLabelText(/card number/i);
        expect(cardNumberEl).toBeInTheDocument();
        const cardOwnerEl = screen.getByLabelText(/name on card/i);
        expect(cardOwnerEl).toBeInTheDocument();
        const expEl = screen.getByLabelText(/Expiration Date/i);
        expect(expEl).toBeInTheDocument();
        const cvcEl = screen.getByLabelText(/cvc/i);
        expect(cvcEl).toBeInTheDocument();
    });
});