import React, { useCallback, useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageData = [
    "/images/slider/lucas-george-wendt-sk-QSuSCbNc-unsplash.jpg",
    "/images/slider/joanna-kosinska-3BgkveM3y_k-unsplash.jpg",
    "/images/slider/jess-bailey-ycTvvg1mPU4-unsplash.jpg",
  ];

  const nextSlideHandler = useCallback(() => {
    setCurrentSlide(
      currentSlide === imageData.length - 1 ? 0 : (prev) => prev + 1
    );
  }, [currentSlide,imageData.length]);

  const prevSlideHandler = useCallback(() => {
    setCurrentSlide(
      currentSlide === 0 ? imageData.length - 1 : (prev) => prev - 1
    );
  }, [currentSlide,imageData.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlideHandler();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlideHandler]);

  const listItems = imageData.map((value,index)=>(
    <li key={index+1} className={`pagingItem ${currentSlide === index ? "active": ""}`} onClick={()=>{setCurrentSlide(index)}}></li>
  ));

  return (
    <div className="slider">
      <div
        className="sliderContainer"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
          width: `${imageData.length}00vw`,
        }}
      >
        <div className="sliderItem">
          <img src={imageData[0]} alt="School" />
          <div className="sliderDiv">
            <h2 className="noSelect">GREAT DEAL ON</h2>
            <h2 className="biggerTitle noSelect">STATIONARY</h2>
            <p className="noSelect">Best online store for School Stationary and More</p>
          </div>
        </div>
        <div className="sliderItem">
          <img src={imageData[1]} alt="Office" loading={"lazy"}  />
          <div className="sliderDiv">
            <h2 className="noSelect">OFFICE STATIONARY</h2>
            <h2 className="biggerTitle noSelect">%20 DISCOUNT</h2>
            <p className="noSelect">Best online store for Office Stationary Items</p>
          </div>
        </div>
        <div className="sliderItem">
          <img src={imageData[2]} alt="Gifts" />
          <div className="sliderDiv">
            <h2 className="noSelect">GIFTS & DECORATIONS</h2>
            <h2 className="biggerTitle noSelect">%10 DISCOUNT</h2>
            <p className="noSelect">Best online store for Gifts and Decorations Items</p>
          </div>
        </div>
      </div>
      <div className="prev">
        <div className="arrowBack" onClick={prevSlideHandler}>
          <ArrowBackIosNewIcon />
        </div>
      </div>
      <div className="next">
        <div className="arrowForward" onClick={nextSlideHandler}>
          <ArrowForwardIosIcon />
        </div>
      </div>
      <div className="sliderDots">
        <ul>
          {listItems}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
