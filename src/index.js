import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductProviderComp from "./context/products";
import CartProviderComp from "./context/cart";

ReactDOM.render(
  <ProductProviderComp>
    <CartProviderComp>
      <App />
    </CartProviderComp>
  </ProductProviderComp>,
  document.getElementById("root")
);
