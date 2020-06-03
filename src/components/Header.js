import React from "react";
import Scroll from "react-scroll";
import logo from "../assets/images/logo.png";
import Headroom from "react-headroom";
const Link = Scroll.Link;

const Header = () => {
  return (
    <Headroom>
      <header className="navbar">
        <div className="logo">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            style={{ "&:hover": "cursor" }}
          >
            <img src={logo} />
          </Link>
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
              <a
                className="nav-link"
                activeClass="active"
                href="../assets/images/avatar.jpg"
                download="Saurav Ghosal Resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
};

export default Header;
