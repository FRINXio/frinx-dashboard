import React from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "./logo-min.png";

const Header = () => {
  return (
    <Navbar className="navbarHeader">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
