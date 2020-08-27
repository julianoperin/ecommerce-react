import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "../../context/cart";

export default function CartItem({ id, image, title, price, amount }) {
  //cart context
  const { removeItem, increaseAmount, decreaseAmount } = React.useContext(
    CartContext
  );

  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => {
            removeItem(id);
          }}
        >
          <FaTrashAlt />
        </button>
      </div>
      <div>
        <button
          type="button"
          button
          className="cart-btn amount-btn"
          onClick={() => {
            increaseAmount(id);
          }}
        >
          <AiOutlinePlus />
        </button>
        <p className="item-amount">{amount}</p>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => {
            decreaseAmount(id, amount);
          }}
        >
          <AiOutlineMinus />
        </button>
      </div>
    </article>
  );
}
