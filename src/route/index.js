import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes.constant";
import { Basket, Home } from "../containers";
const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>

      <Route exact path={ROUTES.BASKET}>
        <Basket />
      </Route>
    </Switch>
  );
};
export default Routes;
