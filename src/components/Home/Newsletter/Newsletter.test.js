import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Newsletter from './Newsletter';

describe("Newsletter Component", () => {
  test('Render "Newsletter" component', () => {
    render(<Newsletter />);
    const textEl = screen.getByText(/join our newsletter/i);
    expect(textEl).toBeInTheDocument();
    const inputEl = screen.getByPlaceholderText(/enter your e-mail/i);
    expect(inputEl).toBeInTheDocument();
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
});
