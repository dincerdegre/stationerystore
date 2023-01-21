import React, { useState, useContext, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

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
      if (dataJSON.length < 1) {
        return navigate("/404", { replace: true });
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [loading, data]);

  return (
    <div className={classes.productContainer}>
      {loading && !data ? (
        <Loader />
      ) : (
        <Fragment>
          <div className={classes.left}>
            <ImageItem title={data?.title} image={data?.image} />
          </div>
          <div className={classes.right}>
            <div className={classes.title}>
              <h2>{data?.title}</h2>
            </div>
            <div className={classes.info}>
              <div className={classes.priceInfo}>
                <PriceItem price={data?.price} oldPrice={data?.oldprice} />
              </div>
              <div className={classes.amountCartInfo}>
                <AmountSelector
                  onAmountChange={amountChangeHandler}
                  size="large"
                />
                <AddToCart onClick={addToCartHandler} />
              </div>
            </div>
            <div className={classes.desc}>
              <h2>Product Details</h2>
              <p>{data?.desc}</p>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Product;
