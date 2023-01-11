import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    updateItem: (id, amount) => {},
});

export default CartContext;