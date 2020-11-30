import React from "react";
import { Navbar } from "react-bootstrap";
import UserNav from "./UserNav";
import "./Header.css";
import logo from "./logo-min.png";

const Header = () => {
  return (
    <Navbar className="navbarHeader">
      <Navbar.Brand href={process.env.PUBLIC_URL}>
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <UserNav />
    </Navbar>
  );
};

export default Header;
