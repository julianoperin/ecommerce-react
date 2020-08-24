import React from "react";
import loading from "../assets/loader.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h2>One Moment...</h2>
      <img src={loading} alt="loading gif" />
    </div>
  );
}
