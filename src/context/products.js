// products context
import React from "react";
import axios from "axios";
import url from "../utils/URL";
import { featuredProducts } from "../utils/helpers";

//! INIT THE CONTEXT
export const ProductContext = React.createContext();

//! Once we create the context we have access to PROVIDER, CONSUMER = can omit,  useContext
// PROVIDER => Used to wrap our application in
// useContext => ...

const ProductProviderComp = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  //! use Effect will run by default after every render
  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      const featured = featuredProducts(response.data); //!Using the helper function to get the featured products
      setFeatured(featured); //! set up featured products
      setProducts(response.data); //! Set up all products
      setLoading(false);
    });
    //! setup second argument and perform clean up action
    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      <div>{children}</div>
    </ProductContext.Provider>
  );
};

export default ProductProviderComp;
