import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { BasketContext } from "../context/basket.context";
import { ROUTES } from "../route/routes.constant";
import "./header.css";

const Header = () => {
  const hirstory = useHistory();
  const { products } = useContext(BasketContext);

  return (
    <div className="container">
      <p
        onClick={() => {
          hirstory.push(ROUTES.HOME);
        }}
        className="link"
      >
        Home
      </p>
      <p
        onClick={() => {
          hirstory.push(ROUTES.BASKET);
        }}
        className="link"
      >
        Basket {products?.length}
      </p>
    </div>
  );
};
export default Header;
