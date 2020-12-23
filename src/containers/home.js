import React, { useContext } from "react";
import Product from "../Products.json";
import { BasketContext } from "../context/basket.context";
const Home = () => {
  const { add } = useContext(BasketContext);
  return (
    <div className="flex-wrap">
      {Product.map((i) => {
        return (
          <div key={i.productId} className="product-container">
            <p>{i.item}</p>
            <p>{i.price}</p>
            <button
              onClick={() => {
                add(i);
              }}
            >
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
