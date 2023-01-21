import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ImageItem from "./ImageItem";

describe("ImageItem component", () => {
  test("Render component", () => {
    render(
      <ImageItem
        image={["testimage1.jpg", "testimage2.jpg"]}
        title="test title"
      />
    );
    const bigImageEl = document
      .getElementsByClassName("mainImage")
      .item(0)
      .querySelector("img");
    expect(bigImageEl).toHaveAttribute("src", "testimage1.jpg");
    expect(bigImageEl).toHaveAttribute("alt", "test title");
    const thumbImageEl = document
      .getElementsByClassName("imageThumbs")
      .item(0)
      .querySelectorAll("img");
    expect(thumbImageEl[0]).toHaveAttribute("src", "testimage1.jpg");
    expect(thumbImageEl[1]).toHaveAttribute("src", "testimage2.jpg");
  });

  test("When Clicks thumb MainPicture Changes", () => {
    render(
      <ImageItem
        image={["testimage1.jpg", "testimage2.jpg"]}
        title="test title"
      />
    );
    const thumbImageEl = document
      .getElementsByClassName("imageThumbs")
      .item(0)
      .querySelectorAll("img");
    userEvent.click(thumbImageEl[1]);
    const bigImageEl = document
      .getElementsByClassName("mainImage")
      .item(0)
      .querySelector("img");
    expect(bigImageEl).toHaveAttribute("src", "testimage2.jpg");
    userEvent.click(thumbImageEl[0]);
    expect(bigImageEl).toHaveAttribute("src", "testimage1.jpg");
  });
});
