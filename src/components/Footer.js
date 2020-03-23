import React from "react";
import Container from "react-bootstrap/Container";
import Scroll from "react-scroll";
const Link = Scroll.Link;

function Footer() {
  return (
    <footer className="mt-5 footer">
      <Container fluid={true}>
        <div className="footer-upper">
          <div className="footer-text">
            <p>
              Made by <strong>Saurav Ghosal</strong>
            </p>
          </div>
          <hr />
          <div className="footer-lower">
            <div className="footer-links">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="ftr-link"
                activeClass="some-active-class"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="ftr-link"
                activeClass="some-active-class"
              >
                About
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="ftr-link"
                activeClass="some-active-class"
              >
                Contact
              </Link>
            </div>
            <div className="footer-icons">
              <a
                href="https://www.facebook.com/saurav.ghosal.796"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-facebook-square"
              ></a>
              <a
                href="https://www.linkedin.com/in/saurav-ghosal-b71033171/"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-linkedin-square"
              ></a>
              <a
                href="https://www.instagram.com/ghosalsaurav/"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-instagram"
              ></a>
              <a
                href="https://twitter.com/SauravGhosal3"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-twitter-square"
              ></a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
