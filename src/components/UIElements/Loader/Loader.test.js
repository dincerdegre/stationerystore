import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Loader from "./Loader";

describe('Loader component',()=>{

    test('render "Loader" component',()=>{
        render(<Loader />);
        const loaderEl = screen.getByTestId("loader");
        expect(loaderEl).toBeInTheDocument();
    });
});