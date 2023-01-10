import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Textarea from "./Textarea";

describe("Textarea Component", () => {
  test("Empty textarea", () => {
    render(<Textarea name="test" />);
    const textareaEl = screen.getByRole("textbox");
    expect(textareaEl).toBeInTheDocument();
  });

  test("Textarea has value", () => {
    render(<Textarea name="test" label="testlabel" onChange={jest.fn()} value="testValue" />);
    const inputEl = screen.getByRole("textbox");
    expect(inputEl).toHaveValue("testValue");
  });

  test("Textarea has label", () => {
    render(<Textarea name="test" label="testlabel"/>);
    const textareaEl = screen.getByLabelText("testlabel");
    expect(textareaEl).toBeInTheDocument();
  });

  test("Textarea div has className", () => {
    render(<Textarea name="test" className="testclass"/>);
    const inputEl = screen.getByRole("textbox").closest("div");
    expect(inputEl.getAttribute("class")).toEqual("testclass");
  });
});
