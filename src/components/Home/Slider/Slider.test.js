import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Slider from "./Slider";

describe("Slider Component", () => {
  test('Render "Slider" component', () => {
    render(<Slider />);
    const sliderEl = document.getElementsByClassName("slider").item(0);
    expect(sliderEl).toBeInTheDocument();
    const firstImage = screen.getByAltText("School");
    expect(firstImage).toHaveAttribute("src","/images/slider/lucas-george-wendt-sk-QSuSCbNc-unsplash.jpg");
    const secondImage = screen.getByAltText("Office");
    expect(secondImage).toHaveAttribute("src","/images/slider/joanna-kosinska-3BgkveM3y_k-unsplash.jpg");
    const thirdImage = screen.getByAltText("Gifts");
    expect(thirdImage).toHaveAttribute("src","/images/slider/jess-bailey-ycTvvg1mPU4-unsplash.jpg");
  });

  test("When Click Forward Icon", () => {
    render(<Slider />);
    const forwardButton = document
      .getElementsByClassName("arrowForward")
      .item(0);
    userEvent.click(forwardButton);
    const styleChange = document
      .getElementsByClassName("sliderContainer")
      .item(0).style;
    expect(styleChange).toHaveProperty("transform", "translateX(-100vw)");
    userEvent.click(forwardButton);
    expect(styleChange).toHaveProperty("transform", "translateX(-200vw)");
    userEvent.click(forwardButton);
    expect(styleChange).toHaveProperty("transform", "translateX(-0vw)");
  });

  test("When Click Backward Icon", () => {
    render(<Slider />);
    const backwardButton = document.getElementsByClassName("arrowBack").item(0);
    userEvent.click(backwardButton);
    const styleChange = document
      .getElementsByClassName("sliderContainer")
      .item(0).style;
    expect(styleChange).toHaveProperty("transform", "translateX(-200vw)");
    userEvent.click(backwardButton);
    expect(styleChange).toHaveProperty("transform", "translateX(-100vw)");
    userEvent.click(backwardButton);
    expect(styleChange).toHaveProperty("transform", "translateX(-0vw)");
  });

  test("When Click First PagingItem", () => {
    render(<Slider />);
    const pagingItem = document.getElementsByClassName("pagingItem").item(0);
    userEvent.click(pagingItem);
    expect(pagingItem).toHaveClass("active");
    const styleChange = document
      .getElementsByClassName("sliderContainer")
      .item(0).style;
    expect(styleChange).toHaveProperty("transform", "translateX(-0vw)");
  });

  test("When Click Second PagingItem", () => {
    render(<Slider />);
    const pagingItem = document.getElementsByClassName("pagingItem").item(1);
    userEvent.click(pagingItem);
    expect(pagingItem).toHaveClass("active");
    const styleChange = document
      .getElementsByClassName("sliderContainer")
      .item(0).style;
    expect(styleChange).toHaveProperty("transform", "translateX(-100vw)");
  });

  test("When Click Third PagingItem", () => {
    render(<Slider />);
    const pagingItem = document.getElementsByClassName("pagingItem").item(2);
    userEvent.click(pagingItem);
    expect(pagingItem).toHaveClass("active");
    const styleChange = document
      .getElementsByClassName("sliderContainer")
      .item(0).style;
    expect(styleChange).toHaveProperty("transform", "translateX(-200vw)");
  });
});
