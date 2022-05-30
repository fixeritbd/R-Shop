import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "rsuite";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { GiScales } from "react-icons/gi";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MainMenu() {
  let [logo, setLogo] = useState({});

  useEffect(() => {
    let logoData = async () => {
      let data = await axios.get("http://localhost:8000/logo");
      setLogo(data.data.img);
    };

    logoData();
  }, []);

  return (
    <div>
      <Container className="container">
        <Navbar className="menu">
          <Navbar.Brand href="#">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Nav className="menu-item">
            <Link to="/">
              {" "}
              <Nav.Item>Home</Nav.Item>{" "}
            </Link>

            <Nav.Item>Contacts</Nav.Item>
          </Nav>
          <Nav pullRight>
            <div className="nav-icon">
              <FaRegUserCircle className="icon" />
              <AiOutlineHeart className="icon" />
              <Link to="/compare">
                <GiScales className="icon" />
              </Link>
              <Link to="/cartpage">
                <span className="cart">
                  <AiOutlineShoppingCart className="icon" />
                  <span className="round">15</span>
                </span>
              </Link>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}
