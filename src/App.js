import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BasketProvider } from "./context/basket.provider";
import Routes from "./route";
import './App.css'
import { Header } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <BasketProvider>
      <Header />
        <Routes />
      </BasketProvider>
    </BrowserRouter>
  );
};

export default App;
