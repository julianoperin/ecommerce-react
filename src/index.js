import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductProviderComp from "./context/products";
import CartProviderComp from "./context/cart";
import { UserProvider } from "./context/user";

ReactDOM.render(
  <UserProvider>
    <ProductProviderComp>
      <CartProviderComp>
        <App />
      </CartProviderComp>
    </ProductProviderComp>
  </UserProvider>,
  document.getElementById("root")
);
