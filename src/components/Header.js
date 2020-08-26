import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/PEXELES.png";
import CartLink from "./Cart/CartLink";

export default function Header() {
  return (
    <header className="header">
      {/* <img src={logo} alt="logo" className="logo" /> */}
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
        </div>
        <div>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <CartLink />
        </div>
      </ul>
    </header>
  );
}
