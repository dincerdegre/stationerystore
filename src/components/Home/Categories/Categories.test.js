import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Categories from "./Categories";

describe("Categories Component", () => {
  test("Render component", () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );
    const headerEl = screen.getByText("Discover Products");
    expect(headerEl).toBeInTheDocument();
    const bannerItemEl1 = screen.getByText("School Stationary Items");
    expect(bannerItemEl1).toBeInTheDocument();
    const bannerItemEl2 = screen.getByText("Gifts & Decorations");
    expect(bannerItemEl2).toBeInTheDocument();
    const bannerItemEl3 = screen.getByText("Office Stationary Items");
    expect(bannerItemEl3).toBeInTheDocument();
  });
});
