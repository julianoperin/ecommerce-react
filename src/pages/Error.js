import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section>
      <div className="error-container">
        <h1>This page doesn't exist!</h1>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
