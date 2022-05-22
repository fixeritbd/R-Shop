import React from "react";
import { Col, Container, Grid, Row } from "rsuite";
import troli1 from "./troli-1.png";
import "./productdeatils.css";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Productdeatils = () => {
  return (
    <>
      <div className="product-deatils-part">
        <Container className="container">
          <Grid>
            <Row className="show-grid" gutter={30}>
              <Col xs={12}>
                <img src={troli1} className="product-img" alt="" />
              </Col>
              <Col xs={12}>
                <div className="product-content">
                  <h2>Quilted gilet with hood</h2>
                  <div className="product-pricing">
                    <div className="pricing-left">
                      <h4>$145</h4>
                      <del>$249</del>
                      <span className="productColor" style={{ background: "green" }}></span>
                      <p>In Stock</p>
                    </div>
                  </div>
                  <div className="product-review"></div>
                  <div className="product-description">
                    {" "}
                    <p>
                      Sed pretium turpis id orci molestie, vitae placerat ligula vulputate. Duis volutpat ante
                      sed laoreet tempus. Vivamus diam purus, vehicula ac tortor ut, dictum vestibulum nisi.
                      Nulla condimentum felis quis augue viverra, et tempor arcu dapibus.
                    </p>{" "}
                  </div>
                  <div className="product-colorSize">
                    <div className="product-select">
                      <h5>Select Color</h5>
                      <span className="productColor" style={{ background: "#622060" }}></span>
                      <span className="productColor" style={{ background: "#1473A9" }}></span>
                      <span className="productColor" style={{ background: "#FBDADA" }}></span>
                      <span className="productColor" style={{ background: "#519D04" }}></span>
                    </div>
                    <div className="product-size">
                      <h5>choose choice</h5>
                      <span className="size" style={{ margin: " 0px 3px" }}>
                        XS
                      </span>
                      <span className="size" style={{ margin: " 0px 3px" }}>
                        S
                      </span>
                      <span className="size" style={{ margin: "0px 3px" }}>
                        M
                      </span>
                    </div>
                  </div>
                  <div className="product-btn">
                    <div className="plusminus"></div>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Productdeatils;
