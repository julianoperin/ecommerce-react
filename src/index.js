import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductProviderComp from "./context/products";

ReactDOM.render(
  <ProductProviderComp>
    <App />
  </ProductProviderComp>,
  document.getElementById("root")
);
