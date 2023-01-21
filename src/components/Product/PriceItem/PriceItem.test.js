import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import PriceItem from './PriceItem';

describe('PriceItem component',()=>{
    test('Render component',()=>{
        render(<PriceItem price="0.99" oldPrice="1.99" />);
        const priceEl = screen.getByText("0.99",{exact:false});
        expect(priceEl).toBeInTheDocument();
        const oldPriceEl = screen.getByText("1.99",{exact:false});
        expect(oldPriceEl).toBeInTheDocument();
    });
});