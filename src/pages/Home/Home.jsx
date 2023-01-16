import React from "react";
import Products from "../../components/Home/Products/Products";
import Newsletter from "../../components/Home/Newsletter/Newsletter";
import Categories from "../../components/Home/Categories/Categories";
import Slider from "../../components/Home/Slider/Slider";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Newsletter />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
