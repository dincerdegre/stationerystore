import React, { useState,useContext } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "../../components/AddToCart/AddToCart";
import CountSelector from "../../components/CountSelector/CountSelector";
import PriceItem from "../../components/PriceItem/PriceItem";
import Loader from "../../components/UI/Loader/Loader";
import productsJSON from "../../data/products.json";
import CartContext from "../../context/cart-context";
import "./Product.scss";

const Product = () => {
  const slug = useParams().slug;
  const [loading, setLoading] = useState(true);
  const [selectedCount,setSelectedCount] = useState(1);
  const [data, setData] = useState(null);
  const cartContext = useContext(CartContext);

  const addToCartHandler = () => {
    cartContext.addItem({
      id:data.id,
      title:data.title,
      image:data.image,
      price:data.price,
      quantity:selectedCount
    });
  }

  const countChangeHandler = (quantity) => {
    setSelectedCount(quantity);
  }

  useState(() => {
    const timeout = setTimeout(() => {
      const dataJSON = productsJSON.products.filter(
        (item) => item["slug"] === slug
      );
      setData(...dataJSON);
      if (dataJSON) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [loading, data]);
  
    return loading ? (
      <Loader />
    ) : (
      <div className="product">
        <div className="productLeft">
          <div className="mainImage">
            <img src={data.image} alt="" />
          </div>
          <div className="otherImages">
            <img src="/images/products/product20.jpg" alt="" />
            <img src="/images/products/product19.jpg" alt="" />
            <img src="/images/products/product18.jpg" alt="" />
            <img src="/images/products/product18.jpg" alt="" />
            <img src="/images/products/product18.jpg" alt="" />
          </div>
        </div>
        <div className="productRight">
          <div className="title">
            <h2>{data.title}</h2>
          </div>
          <div className="info">
            <div className="infoItem">
              <PriceItem price={data.price} oldPrice={data.oldprice} />
            </div>
            <div className="infoItem">
              <CountSelector onCounterChange={countChangeHandler} size="large" />
              <AddToCart onClick={addToCartHandler} />
            </div>
          </div>
          <div className="desc">
            <h2>Product Details</h2>
            <p>
              {data.desc}
            </p>
          </div>
        </div>
      </div>
    );
  
};

export default Product;
