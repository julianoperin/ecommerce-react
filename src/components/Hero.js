import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1 className="future-one">Welcome to JP Gaming!</h1>
        <h2 className="future">The Future of Gaming...</h2>
        {/* whatever passes on home component will come here */}
        {children}
      </div>
    </div>
  );
}
