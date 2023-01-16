import React,{ useContext,useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../context/cart-context";
import AmountSelector from "../../shared/AmountSelector/AmountSelector";
import PriceButton from "../PriceButton/PriceButton";
import classes from "./CardItem.module.scss";

const CardItem = ({id, title, excerpt, image, slug,price, oldPrice }) => {
  const [selectedAmount,setSelectedAmount] = useState(1);
  const cartContext = useContext(CartContext);

  const addToCartHandler = () => {
    cartContext.addItem({
      id:id,
      title:title,
      image:image,
      price:price,
      quantity:selectedAmount
    });
  };

  const amountChangeHandler = (quantity) => {
    setSelectedAmount(quantity);
  }
  return (
    <div className={classes.cardItem}>
      <div className={classes.imageContainer}>
        <Link to={`/product/${slug}`}>
          <div className={classes.imageWrapper}>
            <img src={image[0]} alt={title} />
          </div>
        </Link>
      </div>
      <div className={classes.infoContainer}>
        <h3>{title}</h3>
        <span>{excerpt}</span>
      </div>
      <div className={classes.priceInfoContainer}>
        <PriceButton price={price} oldPrice={oldPrice} onClick={addToCartHandler} />
        <AmountSelector onAmountChange={amountChangeHandler} />
      </div>
    </div>
  );
};

export default CardItem;
