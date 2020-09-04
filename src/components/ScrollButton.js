import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { UserContext } from "../context/user";

const ScrollButton = () => {
  const { height } = React.useContext(UserContext);
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollBackToTop}
      className={height > 100 ? "scroll-btn show-scroll-btn" : "scroll-btn"}
    >
      <FiArrowUp />
    </button>
  );
};

export default ScrollButton;
