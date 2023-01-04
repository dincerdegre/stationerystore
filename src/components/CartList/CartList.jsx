import React, { useContext, useEffect, useRef } from "react";
import CartContext from "../../context/cart-context";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./CartList.scss";
import { Link } from "react-router-dom";

const CartList = ({ onCartClose }) => {
  const cartContext = useContext(CartContext);
  const ref = useRef(null);
  const products = cartContext.items;

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  useEffect(()=> {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onCartClose && onCartClose();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  },[onCartClose]);

  return (
    <div className="cartContainer">
      <div className="cartList" ref={ref}>
        <div className="cartTop">
          <h3>Shopping Cart</h3>
          {products.length <= 0 && (
            <div className="emptyCart">Cart is Empty</div>
          )}
          {products?.map((item) => (
            <div className="item" key={item.id}>
              <div className="itemImage">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="itemDetails">
                <div className="itemTitle">{item.title}</div>
                <div className="priceAndQuantity">
                  {item.quantity} Qty x ${item.price}
                </div>
                <div className="totalPrice noSelect">
                  ${item.quantity * item.price}
                </div>
              </div>
              <div
                className="itemDelete"
                onClick={() => {
                  cartContext.removeItem(item.id);
                }}
              >
                <DeleteForeverIcon fontSize="large" />
              </div>
            </div>
          ))}
        </div>
        <div className="cartBottom">
          <div className="cartSubtotal">
            <div className="left">
              <h4>Subtotal</h4>
              <span>Shipping and Taxes calculated at Checkout Section</span>
            </div>
            <div className="right">
              <h4>${totalPrice()}</h4>
            </div>
          </div>
          <div className="cartCheckout">
            <Link to="/cart" className="cartButton" onClick={onCartClose}>
              View Cart
            </Link>
            <Link
              to="/checkout"
              className="cartButton checkout"
              onClick={onCartClose}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
