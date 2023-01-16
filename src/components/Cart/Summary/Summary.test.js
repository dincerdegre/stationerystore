import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Summary from './Summary';

describe("Summary Component", () => {
    test('Render "Summary" component',()=>{
        render(<Summary />);
        const summaryEl = document.getElementsByClassName("summary").item(0);
        expect(summaryEl).toBeInTheDocument();
        const summarySubtotalEl = screen.getByText(/subtotal/i);
        expect(summarySubtotalEl).toBeInTheDocument();
    });
});