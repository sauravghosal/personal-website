import React from "react";
import Scroll from "react-scroll";
const Link = Scroll.Link;

const Header = () => (
  <header className="navbar">
    <div className="logo">Saurav Ghosal</div>
    <nav>
      <ul>
        <li>
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
