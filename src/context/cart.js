// cart context
import React from "react";
import localCart from "../utils/localCart";

//! INIT THE CONTEXT
export const CartContext = React.createContext();

//! Once we create the context we have access to PROVIDER, CONSUMER = can omit,  useContext
// PROVIDER => Used to wrap our application in
// useContext => ...

function CartProviderComp({ children }) {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  return (
    <CartContext.Provider value={{ cart, total, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProviderComp;
