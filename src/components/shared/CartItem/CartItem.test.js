import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CartItem from "./CartItem";

describe("CartItem component", () => {
  test("Render component", () => {
    render(
      <MemoryRouter>
        <CartItem />
      </MemoryRouter>
    );
    const itemEl = document.getElementsByClassName("cartItem").item(0);
    expect(itemEl).toBeInTheDocument();
  });

  test('Render "CartItem" component All Parameters', () => {
    const onDelete = jest.fn();
    render(
      <MemoryRouter>
        <CartItem
          id="1"
          title="test title"
          image={["testimage.jpg"]}
          quantity="2"
          price="0.99"
          onDelete={onDelete}
        />
      </MemoryRouter>
    );
    const idEl = screen.getByTestId("cartItem");
    expect(idEl).toHaveAttribute("id", "cart-1");
    const titleEl = screen.getByText("test title");
    expect(titleEl).toBeInTheDocument();
    const imageEl = screen.getByAltText(/test title/i);
    expect(imageEl).toHaveAttribute("src", "testimage.jpg");
    const quantityEl = screen.getByText(/2 qty/i);
    expect(quantityEl).toBeInTheDocument();
    const priceEl = screen.getByText(/x \$0.99/i);
    expect(priceEl).toBeInTheDocument();
  });

  test("Should call onDelete when the delete Button is clicked", () => {
    const onDelete = jest.fn();
    render(
      <MemoryRouter>
        <CartItem
          id="1"
          title="test title"
          image={["testimage.jpg"]}
          quantity="2"
          price="0.99"
          onDelete={onDelete}
        />
      </MemoryRouter>
    );
    const deleteEl = document.getElementsByClassName("deleteContainer").item(0);
    expect(deleteEl).toBeInTheDocument();
    userEvent.click(deleteEl);
    expect(onDelete).toHaveBeenCalled();
  });

  test("If closeSelector prop is true", () => {
    const onDelete = jest.fn();
    render(
      <MemoryRouter>
        <CartItem
          id="1"
          title="test title"
          image={["testimage.jpg"]}
          quantity="2"
          price="0.99"
          onDelete={onDelete}
          closeSelector
        />
      </MemoryRouter>
    );
    const selectorEl = document
      .getElementsByClassName("selectorContainer")
      .item(0);
    expect(selectorEl).not.toBeInTheDocument();
  });

  test("If closeSelector prop is false", () => {
    const onDelete = jest.fn();
    render(
      <MemoryRouter>
        <CartItem
          id="1"
          title="test title"
          image={["testimage.jpg"]}
          quantity="2"
          price="0.99"
          onDelete={onDelete}
        />
      </MemoryRouter>
    );
    const selectorEl = document
      .getElementsByClassName("selectorContainer")
      .item(0);
    expect(selectorEl).toBeInTheDocument();
  });
});
