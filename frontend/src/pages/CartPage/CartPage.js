import React from "react";
import { Container, Button, Grid, Row, Col } from "rsuite";

import "./CartPage.css";

const CartPage = () => {
  return (
    <>
      <Container className="container cart_page_main">
        <div className="cart_page_title">
          <p className="pagination"> Home | Shop | Cart</p>
          <h1 className="title">Cart Page</h1>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
