import React, { useState, useMemo, useCallback, useEffect } from "react";
import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cartItems = JSON.parse(storedCart).items;
      setItems(cartItems);
    }
  }, []);

  const addItemHandler = useCallback(
    (item) => {
      const existingItemIndex = items.findIndex((i) => {
        return item.id.toString() === i.id.toString();
      });
      const existingItem = items[existingItemIndex];
      let updatedItems;
      if (existingItem) {
        existingItem.quantity += item.quantity;
        updatedItems = [...items];
        updatedItems[existingItemIndex] = existingItem;
        setItems(updatedItems);
      } else {
        updatedItems = [...items];
        updatedItems.push(item);
        setItems(updatedItems);
      }
      // Local Storage
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: [...updatedItems],
        })
      );
    },
    [items]
  );

  const removeItemHandler = useCallback(
    (id) => {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
      // Local Storage
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: [...newItems],
        })
      );
    },
    [items]
  );

  const updateItemHandler = useCallback(
    (id, count) => {
      const existingItemIndex = items.findIndex(
        (i) => id.toString() === i.id.toString()
      );
      const existingItem = items[existingItemIndex];
      let updatedItems;
      if (count > 0){
        const updatedItem = {
          ...existingItem,
          quantity:count
        }
        updatedItems = [...items];
        updatedItems[existingItemIndex] = updatedItem;
        setItems(updatedItems);
      } else {
        updatedItems = items.filter((i)=> i.id !== id);
        setItems(updatedItems);
      }
      // Local Storage
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: [...updatedItems],
        })
      );
    },
    [items]
  );

  const cartContext = useMemo(
    () => ({
      items: items,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
      updateItem: updateItemHandler,
    }),
    [items, addItemHandler, removeItemHandler, updateItemHandler]
  );

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
