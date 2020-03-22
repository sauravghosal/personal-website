import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Scroll from "react-scroll";
const Link = Scroll.Link;

const Header = () => (
  <Navbar className="border-bottom" expand="lg">
    <Navbar.Brand href="/">Saurav Ghosal </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-toggle" />
    <Navbar.Collapse id="navbar-toggle">
      <Nav className="ml-auto">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
        >
          About
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-link"
          activeClass="active"
        >
          Contact
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
