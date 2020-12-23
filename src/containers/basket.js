import React, { useContext } from "react";
import { BasketContext } from "../context/basket.context";

const Basket = () => {
  const { products } = useContext(BasketContext);

  return (
    <div className="flex-wrap">
      {products.map((i) => {
        return (
          <div key={i.productId} className="product-container">
            <p>{i.item}</p>
            <p>{i.price}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Basket;
