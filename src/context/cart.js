// Cart context
import React from "react";
import localCart from "../utils/localCart";

//! INIT THE CONTEXT
export const CartContext = React.createContext();

//! Once we create the context we have access to PROVIDER, CONSUMER = can omit,  useContext
// PROVIDER => Used to wrap our application in
// useContext => ...

function CartProviderComp({ children }) {
  const [cart, setCart] = React.useState([]); // Array with all products
  const [total, setTotal] = React.useState(0); // Total value in the cart
  const [cartItems, setCartItems] = React.useState(0); // SUM ALL ITEMS IN THE CART = 12

  React.useEffect(() => {
    // local storage
    // Cart Items | SUM ALL ITEMS IN THE CART
    let newCartItems = cart.reduce((total, cartItem) => {
      // (acc,curr)
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
    // cart total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]); //only run if cart is updated

  //! ====== remove item
  const removeItem = (id) => {
    // setCart([...cart].filter((item) => item.id) !== id);
    let newCart = [...cart].filter((item) => item.id !== id);
    setCart(newCart);
  };

  //! ====== increaseAmount
  const increaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newCart);
  };

  //! ====== decrease Amount
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
      return;
    } else {
      const newCart = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setCart(newCart);
    }
  };

  //! ====== addToCart
  const addToCart = (product) => {
    const {
      id,
      image: { url },
      title,
      price,
    } = product;
    const item = [...cart].find((item) => item.id === id);
    if (item) {
      increaseAmount(id);
      return;
    } else {
      const newItem = { id, image: url, title, price, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };

  //! ====== clear cart
  const clearCart = () => {
    setCart([]);
  };

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
