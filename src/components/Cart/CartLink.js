import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import { GiShoppingCart } from "react-icons/gi";

export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);

  return (
    <div className="cart-link-container">
      <Link to="/cart">
        <GiShoppingCart size={32} />
      </Link>
      <span className="cart-link-total">{cartItems}</span>
    </div>
  );
}
