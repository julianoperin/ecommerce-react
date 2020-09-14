import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-name.png";
import CartLink from "./Cart/CartLink";
import { UserContext } from "../context/user";
import LoginLink from "../components/LoginLink";

export default function Header() {
  const { user } = React.useContext(UserContext);
  return (
    <header className="header">
      <ul>
        <div>
          <img src={logo} alt="logo" className="logo" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {user.token && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </div>
        <div>
          <CartLink />
          <LoginLink />
        </div>
      </ul>
    </header>
  );
}
