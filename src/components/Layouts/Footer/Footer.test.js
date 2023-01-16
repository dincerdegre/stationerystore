import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer component", () => {
    test("Render component", () => {
        render(
          <MemoryRouter>
            <Footer />
          </MemoryRouter>
        );
        const footerLinksEl = screen.getByText("Links");
        expect(footerLinksEl).toBeInTheDocument();
        const contactEl = screen.getByText("Contact Us");
        expect(contactEl).toBeInTheDocument();
        const ourCompanyEl = screen.getByText("Our Company");
        expect(ourCompanyEl).toBeInTheDocument();
        const socialEl = screen.getByText("Social");
        expect(socialEl).toBeInTheDocument();
      });
});