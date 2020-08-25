// cart context
import React from "react";
import localCart from "../utils/localCart";

//! INIT THE CONTEXT
export const CartContext = React.createContext();

//! Once we create the context we have access to PROVIDER, CONSUMER = can omit,  useContext
// PROVIDER => Used to wrap our application in
// useContext => ...

function CartProviderComp({ children }) {
  const [cart, setCart] = React.useState(localCart);
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  // remove item
  const removeItem = (id) => {};

  // increaseAmount
  const increaseAmount = (id) => {};

  // decrease Amount
  const decreaseAmount = (id) => {};

  // addToCart
  const addToCart = (product) => {};

  // clear cart
  const clearCart = () => {};

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProviderComp;
