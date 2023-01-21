import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ListItem from "./ListItem";

describe("ListItem component", () => {
    
    test("Render component", () => {
        const onDelete = jest.fn();
        render(<ListItem id="1" title="test title" image={["testimage.jpg"]} quantity="2" price="0.99" onDelete={onDelete} />)
        const listItemEl = document.getElementsByClassName("listItem").item(0);
        expect(listItemEl).toBeInTheDocument();
        const idEl = listItemEl.hasAttribute("id").valueOf("1");
        expect(idEl).toBeTruthy();
        const titleEl = screen.getByText(/test title/i);
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
        render(<ListItem id="1" title="test title" image={["testimage.jpg"]} quantity="2" price="0.99" onDelete={onDelete} />)
        const deleteEl = document.getElementsByClassName("deleteContainer").item(0);
        userEvent.click(deleteEl);
        expect(onDelete).toHaveBeenCalled();
    });


});