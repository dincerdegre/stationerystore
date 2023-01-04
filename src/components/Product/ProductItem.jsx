import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart-context";
import CountSelector from "../CountSelector/CountSelector";
import PriceItemButton from "../PriceItem/PriceItemButton";
import "./ProductItem.scss";

const ProductItem = ({id, title, slug, image, excerpt, price, oldPrice }) => {
  const [selectedCount,setSelectedCount] = useState(1);
  const cartContext = useContext(CartContext);

  const addToCartHandler = () => {
    cartContext.addItem({
      id:id,
      title:title,
      image:image,
      price:price,
      quantity:selectedCount
    });
  };

  const countChangeHandler = (quantity) => {
    setSelectedCount(quantity);
  }

  return (
    <div className="productItem">
      <div className="productImageWrapper">
        <Link to={`/product/${slug}`}>
          <div className="productImage">
            <img src={image} alt={title} />
          </div>
        </Link>
      </div>
      <div className="productInfo">
        <h3>{title}</h3>
        <span>{excerpt}</span>
      </div>
      <div className="productPrice">
        <PriceItemButton price={price} oldPrice={oldPrice} onClick={addToCartHandler} />
        <CountSelector onCounterChange={countChangeHandler} />
      </div>
    </div>
  );
};

export default ProductItem;
