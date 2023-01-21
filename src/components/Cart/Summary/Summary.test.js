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

    test('Render "Summary" component with All Parameters',()=>{
        render(<Summary subtotal="10.00" tax="1.00" shipping="5.00" total="16.00" moneySymbol="TL" />);
        const subtotalEl = screen.getByText("10.00",{exact:false});
        expect(subtotalEl).toBeInTheDocument();
        const taxEl = screen.getByText("1.00",{exact:false});
        expect(taxEl).toBeInTheDocument();
        const shippingEl = screen.getByText("5.00",{exact:false});
        expect(shippingEl).toBeInTheDocument();
        const totalEl = screen.getByText("16.00",{exact:false});
        expect(totalEl).toBeInTheDocument();
        const moneySymbolEl = screen.getAllByText("TL",{exact:false});
        expect(moneySymbolEl.length).toBeGreaterThan(0);
    });
});