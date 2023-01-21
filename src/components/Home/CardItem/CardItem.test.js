import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import CardItem from "./CardItem";

describe("CardItem Component", () => {
  test('Render "CardItem" component', () => {
    render(
      <MemoryRouter>
        <CardItem />
      </MemoryRouter>
    );
    const itemEl = document.getElementsByClassName("cardItem").item(0);
    expect(itemEl).toBeInTheDocument();
  });
  
  test('Render "CardItem" component All Parameters', () => {
    render(
      <MemoryRouter>
        <CardItem
          id="1"
          title="test title"
          excerpt="test excerpt"
          image={["testimage.jpg"]}
          slug="testslug"
          price="0.99"
          oldPrice="1.99"
        />
      </MemoryRouter>
    );
    const idEl = screen.getByTestId("cardItem");
    expect(idEl).toHaveAttribute("id","card-1");
    const titleEl = screen.getByText("test title");
    expect(titleEl).toBeInTheDocument();
    const excerptEl = screen.getByText("test excerpt");
    expect(excerptEl).toBeInTheDocument();
    const imageEl = screen.getByAltText(/test title/i);
    expect(imageEl).toHaveAttribute("src","testimage.jpg");
    const slugEl = screen.getByRole("link");
    expect(slugEl).toHaveAttribute("href","/product/testslug");
    const priceEl = screen.getByText("0.99",{exact:false});
    expect(priceEl).toBeInTheDocument();
    const oldPriceEl = screen.getByText("1.99",{exact:false});
    expect(oldPriceEl).toBeInTheDocument();
  });
});
