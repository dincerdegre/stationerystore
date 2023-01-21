import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("NotFound 404 Page", () => {

  test("Render NotFound 404 Page", () => { 
    render(
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      );
      const notFoundEl = document.getElementsByClassName("notFound").item(0);
      expect(notFoundEl).toBeInTheDocument();
      const notFoundTextEl = screen.getByText(/404 not found/i);
      expect(notFoundTextEl).toBeInTheDocument();
  });

});
