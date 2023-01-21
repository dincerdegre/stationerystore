import { render, screen,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Products from './Products';

describe("Products Component", () => {

    test('Render "Products" component', async () => {
        render(<MemoryRouter><Products /></MemoryRouter>);
        const headerEl = screen.getByText(/Products/i);
        expect(headerEl).toBeInTheDocument();
        const loaderEl = screen.getByTestId("loader");
        expect(loaderEl).toBeInTheDocument();
        await waitFor(()=>{
            expect(loaderEl).not.toBeInTheDocument();
        });
        const cardItemEl = screen.getAllByTestId("cardItem");
        expect(cardItemEl).toBeTruthy();
    });
    
});
