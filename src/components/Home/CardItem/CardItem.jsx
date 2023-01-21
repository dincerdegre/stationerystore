import React,{ useContext,useState } from "react";
import CartContext from "../../../context/cart-context";
import AmountSelector from "../../shared/AmountSelector/AmountSelector";
import PriceButton from "../PriceButton/PriceButton";
import Button from "../../UIElements/Button/Button";
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
    <div className={classes.cardItem} id={`card-${id}`} data-testid="cardItem">
      <div className={classes.imageContainer}>
        <Button to={`/product/${slug}`} dataTestid="cardLink">
          <div className={classes.imageWrapper}>
            {image && <img src={image[0]} alt={title} /> }
          </div>
        </Button>
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
