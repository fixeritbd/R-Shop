import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import GotoTrali from "../components/GotoTrali";
import ProductDeatils from "../components/ProductDeatils/ProductDeatils";

const ProductPage = () => {
  return (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <ProductDeatils />
      <GotoTrali />
      <Footer />
    </>
  );
};

export default ProductPage;
