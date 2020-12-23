import React, { useState } from "react";
import { BasketContext } from "./basket.context";

export const BasketProvider = (props) => {
  const [products, setProducts] = useState([]);

  const add = ( item) => {
   
    if (products.length) {
      const index = products.findIndex((product) => product.productId === item.productId);
      if (index !== -1) {
        const product = products[index];
        const quantity = product.quantity ? product.quantity : 0;
        products[index] = { ...product, ...item, quantity: quantity + 1 };
      } else {
        products.push({ ...item, quantity: 1 });
      }
    } else {
      products.push({ ...item, quantity: 1 });
    }

    setProducts([...products]);
  };

  const update = (itemId, quantity) => {
    const index = products.findIndex((product) => product.id === itemId);
    if (quantity < 1 && index > -1) {
      products.splice(index, 1);
    } else {
      const product = products[index];
      products[index] = { ...product, quantity };
    }
  };

  const clearCart = () => {
    setProducts([]);
  };

  return (
    <BasketContext.Provider
      value={{
        products,
        add,
        update,
        clearCart,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};
