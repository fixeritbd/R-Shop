import React, { useState, useEffect } from "react";
import { Container, Grid, Row, Col } from "rsuite";
import axios from "axios";

const Footer = () => {
  let [logo, setLogo] = useState({});

  useEffect(() => {
    let logoData = async () => {
      let data = await axios.get("http://localhost:8000/logo");
      setLogo(data.data.img);
    };

    logoData();
  }, []);

  return (
    <div className="footer">
      <Container className="container">
        <Grid>
          <Row className="show-grid footer__top">
            <Col md={6}>
              <div>
                <img src={logo} alt="R-Shop" />
              </div>
              <p>
                Nunc gravida mi neque, id fringilla velit efficitur vel. Sed
                mollis, arcu ac mollis eleifend, nunc
              </p>
            </Col>
            <Col md={6}>
              <h3>Generals</h3>

              <ul className="footer__links">
                <li>Customer Support</li>
                <li>Payments</li>
                <li>API Support</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={6}>
              <h3>Supports</h3>

              <ul className="footer__links">
                <li>Terms and Conditions</li>
                <li>Products Return</li>
                <li>Wholesale Policy</li>
                <li>Address Store</li>
              </ul>
            </Col>
            <Col md={6} className="footer__subscribe">
              <h3>Subscribe Us</h3>
              <p>Sed mollis, arcu ac mollis eleifend, nunc</p>
              <form>
                <input placeholder="subscribe" />
                <button>Subscribe</button>
              </form>
            </Col>
          </Row>

          <Row className="show-grid footer__bottom">
            <Col md={6}>
              <h1>R-Shop</h1>
              <p>
                Nunc gravida mi neque, id fringilla velit efficitur vel. Sed
                mollis, arcu ac mollis eleifend, nunc
              </p>
            </Col>
            <Col md={6}>
              <h3>Get In Touch</h3>

              <ul>
                <li>Delivery Information</li>
                <li>Discount</li>
                <li>100% Purchase Protection</li>
                <li>Returns Centre</li>
                <li>Your Account</li>
              </ul>
            </Col>
            <Col md={6}>
              <h3>Categories</h3>

              <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Accessories</li>
                <li>Sports Shoes</li>
                <li>Clothes</li>
              </ul>
            </Col>
            <Col md={6}>
              <h3>Subscribe Us</h3>
              <p>Sed mollis, arcu ac mollis eleifend, nunc</p>
              <form>
                <input placeholder="subscribe" />
                <button>Subscribe</button>
              </form>
            </Col>
          </Row>
        </Grid>
      </Container>
      <div className="copyright-section">
        <p>Merkulove © Trali Template All rights reserved Copyrights 2021</p>
      </div>
    </div>
  );
};

export default Footer;
