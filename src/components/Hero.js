import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Enjoy our products!</h1>
        <p>Sales ends soon...</p>
        {/* whatever passes on home component will come here */}
        {children}
      </div>
    </div>
  );
}
