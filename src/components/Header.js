import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Link from "react-router-dom/Link";

const Header = () => (
  <Navbar
    variant="light"
    className="border-bottom"
    bg="transparent"
    expand="lg"
  >
    <Navbar.Brand href="/">Saurav Ghosal</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-toggle" />
    <Navbar.Collapse id="navbar-toggle">
      <Nav className="ml-auto">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
