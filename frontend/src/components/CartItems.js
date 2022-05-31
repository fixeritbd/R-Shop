import React, { useEffect, useState } from "react";
import { Col, Form, Grid, Row } from "rsuite";
import { Cell, Column, HeaderCell } from "rsuite-table";
import { ImCross } from "react-icons/im";
import axios from "axios";
import Product from "./Product";

const CartItems = () => {
  const [cartitem, setCartItem] = useState([]);

  useEffect(() => {
    const cartItemsData = async () => {
      const { data } = await axios.get("http://localhost:8000/cartitem");
      setCartItem(data);
    };
    cartItemsData();
  }, []);

  let [recentViewed, setRecentViewed] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      let { data } = await axios.get("http://localhost:8000/recentviewed");
      setRecentViewed(data);
    }
    fetchProduct();
  }, []);

  return (
    <>
      <Grid fluid>
        <Row className="show-grid cartMain">
          <Col xs={16}>
            <table>
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUALITY</th>
                <th>SUBTOTAL</th>
                <th></th>
              </tr>
              {cartitem.map((item) => (
                <tr>
                  <td style={{ display: "flex" }}>
                    <img src={item.img} alt="" />
                    <div className="item_des">
                      <p>{item.brand}</p>
                      <h5>{item.itemname}</h5>
                      <p>{item.color}</p>
                      <p>{item.size}</p>
                    </div>
                  </td>
                  <td>
                    <h4>${item.price}</h4>
                  </td>
                  <td>
                    <div className="item_counter">
                      <span>-</span>
                      <span>{item.quantity}</span>
                      <span>+</span>
                    </div>
                  </td>
                  <td>
                    <h4>{item.subtotal}</h4>
                  </td>
                  <td>
                    <button>
                      <ImCross />
                    </button>
                  </td>
                </tr>
              ))}
            </table>
            <div className="cart_operations">
              <Row className="show-grid">
                <Col xs={12} xsOffset={12}>
                  <button>Clear Cart</button>
                  <button>Update Cart</button>
                </Col>
              </Row>
            </div>

            <div>
              <h3>Coupon Discount</h3>
              <div className="coupon_discount">
                <input className="coupon" type="text" placeholder="Enter your Coupon here..." />
                <button>Submit Coupon</button>
              </div>
            </div>
          </Col>

          <Col xs={8} bordered className="shipping_card">
            <div className="full_form">
              <h3 style={{ padding: "30px 0" }}>Shipping</h3>
              <Form>
                <Form.Group controlId="country">
                  <Form.Control name="country" placeholder="Country" />
                </Form.Group>

                <Form.Group controlId="state">
                  <Form.Control name="state" type="text" autoComplete="off" placeholder="State/City" />
                </Form.Group>

                <Form.Group controlId="zip">
                  <Form.Control name="zip" type="text" placeholder="Zip" />
                </Form.Group>
              </Form>

              <div>
                <Row className="show-grid">
                  <Col xs={9} xsPush={15}>
                    <button type="submit" className="btn_submit">
                      Submit
                    </button>
                  </Col>
                </Row>
                <h6>
                  <Row className="show-grid">
                    <Col xs={6}>SubTotal</Col>
                    <Col xs={6} xsPush={12}>
                      $258
                    </Col>
                  </Row>
                </h6>
                <Row className="show-grid">
                  <Col xs={4}>Shipping</Col>
                  <Col xs={6} xsPush={14}>
                    free
                  </Col>
                </Row>
                <h5 style={{ padding: "30px 0" }}>
                  <Row className="show-grid">
                    <Col xs={8}>Order Total</Col>
                    <Col xs={6} xsPush={10}>
                      $452
                    </Col>
                  </Row>
                </h5>
                <Row>
                  <Col xs={24} className="check_out">
                    <button>Proceed To CheckOut</button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={24} className="recent_viewed">
            <div className="recent_viewed_title">
              <h1>RECENTLY VIEWED</h1>
            </div>
            <div className="recent_viewed_card">
              <Grid>
                <Row className="show-grid" gutter={30}>
                  {recentViewed.map((item) => (
                    <Col xs={6}>
                      <Product
                        img={item.img}
                        heading={item.name}
                        rating={item.rating}
                        brand={item.brand}
                        color={item.color}
                        size={item.sizes}
                        price={item.price}
                      />
                    </Col>
                  ))}
                </Row>
              </Grid>
            </div>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default CartItems;
