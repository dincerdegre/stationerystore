import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";

describe("Input Component", () => {
    test("Empty input", () => {
      render(<Input type="text" name="test" />);
      const inputEl = screen.getByRole("textbox");
      expect(inputEl).toBeInTheDocument();
    });

    test("Input has type", () => {
      render(<Input type="text" name="test" />);
      const inputEl = screen.getByRole("textbox");
      expect(inputEl.getAttribute("type")).toEqual("text");
    });

    test("Input has name", () => {
      render(<Input type="text" name="test" />);
      const inputEl = screen.getByRole("textbox");
      expect(inputEl.getAttribute("name")).toEqual("test");
    });

    test("Input has id", () => {
      render(<Input type="text" name="test" />);
      const inputEl = screen.getByRole("textbox");
      expect(inputEl.getAttribute("id")).toEqual("test");
    });

    test("Input has placeholder", () => {
      render(
        <Input
          type="text"
          name="test"
          className="testclass"
          placeholder="test Placeholder"
        />
      );
      const inputEl = screen.getByPlaceholderText(/test placeholder/i);
      expect(inputEl).toBeInTheDocument();
    });

    test("Input has value", () => {
      render(
        <Input
          type="text"
          name="test"
          className="testclass"
          value="testValue"
          onChange={jest.fn()}
        />
      );
      const inputEl = screen.getByRole("textbox");
      expect(inputEl).toHaveValue("testValue");
    });

    test("Input div has className", () => {
      render(<Input type="text" name="test" className="testclass" />);
      const inputEl = screen.getByRole("textbox").closest("div");
      expect(inputEl.getAttribute("class")).toEqual("testclass");
    });

    test("Input has label", () => {
      render(
        <Input
          type="text"
          name="test"
          label="testlabel"
          value="test value"
          onChange={jest.fn()}
        />
      );
      const inputEl = screen.getByLabelText("testlabel");
      expect(inputEl).toBeInTheDocument();
    });

    test("Input has label and label has for parameter", () => {
      render(
        <Input
          type="text"
          name="testfor"
          label="testlabel"
          value="testValue"
          onChange={jest.fn()}
        />
      );
      const labelEl = screen.getByText("testlabel");
      expect(labelEl.getAttribute("for")).toEqual("testfor");
    });
  
});
