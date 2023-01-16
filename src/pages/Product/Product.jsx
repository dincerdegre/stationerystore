import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
// import AddToCart from "../../components/AddToCart/AddToCart";
// import CountSelector from "../../components/CountSelector/CountSelector";
// import PriceItem from "../../components/PriceItem/PriceItem";
import Loader from "../../components/UIElements/Loader/Loader";
import productsJSON from "../../data/products.json";
import CartContext from "../../context/cart-context";
import classes from "./Product.module.scss";
import ImageItem from "../../components/Product/ImageItem/ImageItem";
import AmountSelector from "../../components/shared/AmountSelector/AmountSelector";
import AddToCart from "../../components/Product/AddToCart/AddToCart";
import PriceItem from "../../components/Product/PriceItem/PriceItem";

const Product = () => {
  const slug = useParams().slug;
  const [loading, setLoading] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState(1);
  const [data, setData] = useState(null);
  const cartContext = useContext(CartContext);

  const addToCartHandler = () => {
    cartContext.addItem({
      id: data.id,
      title: data.title,
      image: data.image,
      price: data.price,
      quantity: selectedAmount,
    });
  };

  const amountChangeHandler = (quantity) => {
    setSelectedAmount(quantity);
  };

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
    <div className={classes.productContainer}>
      <div className={classes.left}>
        <ImageItem title={data.title} image={data.image} />
      </div>
      <div className={classes.right}>
        <div className={classes.title}>
          <h2>{data.title}</h2>
        </div>
        <div className={classes.info}>
          <div className={classes.priceInfo}>
            <PriceItem price={data.price} oldPrice={data.oldprice} />
          </div>
          <div className={classes.amountCartInfo}>
            <AmountSelector onAmountChange={amountChangeHandler} size="large" />
            <AddToCart onClick={addToCartHandler} />
          </div>
        </div>
        <div className={classes.desc}>
          <h2>Product Details</h2>
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
