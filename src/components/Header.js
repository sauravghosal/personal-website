import React from "react";
import Scroll from "react-scroll";
import logo from "../assets/images/logo.png";
const Link = Scroll.Link;

const Header = () => (
  <header className="navbar">
    <div className="logo">
      <img src={logo} />
    </div>
    <nav>
      <ul>
        <li>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="active"
          >
            Projects
          </Link>
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
