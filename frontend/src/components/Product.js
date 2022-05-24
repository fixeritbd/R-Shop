import { Panel, Rate } from "rsuite";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import React, { useState } from "react";
import Rating from "./Rating";

function Product(props) {
  const [activeColor, setActiveColor] = useState("red");

  return (
    <div className="single-product">
      <Panel bodyFill style={{ display: "inline-block", width: "100%" }}>
        <img src={props.img} style={{ width: "100%" }} alt={props.name} />

        <div className="product-box">
          <Rating rating={props.rating} />
          <div className="brand">
            <p className="productBrand"> {props.brand}</p>
          </div>
        </div>
        <Panel header={props.heading}>
          <div className="product-box">
            <div className="product-color-box">
              {props.color.map((item) => (
                <span
                  className={
                    activeColor == item
                      ? "productColor activeColor"
                      : "productColor"
                  }
                  style={{ background: `#${item}` }}
                ></span>
              ))}
            </div>
            <div className="product-size">
              {props.size.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </div>
          <span className="cart-product">
            <AiOutlineShopping className="shopping-bag" />
          </span>
          <span className="price">${props.price}</span>
        </Panel>
      </Panel>
    </div>
  );
}

export default Product;

{
  /* {props.color.map(item => (
                        <span className='productColor' style={{ background: `#${item}` }}></span>
                    ))} */
}
