import React, { useState } from "react";
import { Panel } from "rsuite";
import { AiOutlineShopping } from "react-icons/ai";
import Rating from "./Rating";

function Product(props) {
  const [activeColor, setActivecolor] = useState("");
  const [activeSize, setActivesize] = useState("");

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
          <div className="productbox">
            <div className="productcolorbox">
              {props.color.map((item) => (
                <span
                  className={activeColor == item ? "productColor activeColor" : "productColor"}
                  style={{ background: `#${item}` }}
                  onClick={() => setActivecolor(item)}
                ></span>
              ))}
            </div>
            <div className="productsize">
              {props.size.map((item) => (
                <span
                  className={activeSize == item ? "productSize productActiveSize" : "productSize"}
                  onClick={() => setActivesize(item)}
                >
                  {item}
                </span>
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
