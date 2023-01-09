import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Button from "./Button";

describe("Button Component", () => {
  // Button Tag
  test('Render "Button" component as button Tag', () => {
    render(<Button>test</Button>);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });

  test("Button tag has ClassName", () => {
    render(<Button className="testClass">test</Button>);
    const buttonEl = document.getElementsByClassName("testClass").item(0);
    expect(buttonEl).toBeInTheDocument();
  });

  test("Button tag has Type", () => {
    render(<Button type="text">test</Button>);
    const buttonEl = screen.getByText(/test/i);
    expect(buttonEl).toHaveAttribute("type", "text");
  });

  test("Button tag is Disabled", () => {
    render(<Button disabled>test</Button>);
    const buttonEl = screen.getByText(/test/i);
    expect(buttonEl).toBeDisabled();
  });

  test("Button tag has onClick event", () => {
    const clickFn = jest.fn();
    render(<Button onClick={clickFn}>test</Button>);
    const buttonEl = screen.getByText(/test/i);
    userEvent.click(buttonEl);
    expect(clickFn).toHaveBeenCalled();
  });

  // A Tag
  test('Render "Button" component as a href Tag', () => {
    render(<Button href="http://example.com">Test</Button>);
    const aEl = screen.getByText(/test/i).closest("a");
    expect(aEl).toHaveAttribute("href", "http://example.com");
  });

  test("A Tag has ClassName", () => {
    render(<Button className="testClass">Test</Button>);
    const aClass = document.getElementsByClassName("testClass").item(0);
    expect(aClass).toBeInTheDocument();
  });

  // Link Tag (React Router Dom)
  test('Render "Button" as Link (React Router Dom)', () => {
    render(
      <MemoryRouter>
        <Button to="/test">Test</Button>
      </MemoryRouter>
    );
    const linkEl = screen.getByText(/test/i);
    expect(linkEl).toBeInTheDocument();
  });

  test("Link has ClassName", () => {
    render(
      <MemoryRouter>
        <Button to="/test" className="testClass">Test</Button>
      </MemoryRouter>
    );
    const linkClass = document.getElementsByClassName("testClass").item(0);
    expect(linkClass).toBeInTheDocument();
  });

});
