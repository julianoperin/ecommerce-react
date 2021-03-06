import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/Products/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero>
        {/* this is the children which will be rendered on Hero component */}
        <Link to="/products" className="btn btn-primary btn-hero">
          Check out our products
        </Link>
      </Hero>
      <FeaturedProducts />
    </>
  );
}
