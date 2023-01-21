import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import BannerItem from "./BannerItem";

describe("BannerItem Component", () => {
  test('Render "BannerItem" component', () => {
    render(
      <MemoryRouter>
        <BannerItem title="test title" desc="test desc" image="testimage.jpg" link="/linktest" />
      </MemoryRouter>
    );
    const itemEl = document.getElementsByClassName("bannerItem").item(0);
    expect(itemEl).toBeInTheDocument();
    const imageEl = screen.getByAltText("test title");
    expect(imageEl).toHaveAttribute("src","testimage.jpg");
    const titleEl = screen.getByText("test title");
    expect(titleEl).toBeInTheDocument();
    const descEl = screen.getByText("test desc");
    expect(descEl).toBeInTheDocument();
    const linkEl = document.getElementsByClassName("link").item(0);
    expect(linkEl).toBeInTheDocument();
  });

  test('Render component Align Left', () => {
    render(
      <MemoryRouter>
        <BannerItem title="test title" desc="test desc" image="testimage.jpg" link="/linktest" align="left" />
      </MemoryRouter>
    );
    const linkEl = screen.getByText("test title");
    expect(linkEl.parentNode).toHaveAttribute("class","textLeft");
  });

  test('Render component Align Right', () => {
    render(
      <MemoryRouter>
        <BannerItem title="test title" desc="test desc" image="testimage.jpg" link="/linktest" align="right" />
      </MemoryRouter>
    );
    const linkEl = screen.getByText("test title");
    expect(linkEl.parentNode).toHaveAttribute("class","textRight");
  });
});
