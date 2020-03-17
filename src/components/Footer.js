import React from "react";
import Container from "react-bootstrap/Container";
import Link from "react-router-dom/Link";
import "../App.css";

function Footer() {
  return (
    <footer className="mt-5" style={{ backgroundColor: "#E7ECFF" }}>
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
              <Link className="ftr-link" to="/">
                Home
              </Link>
              <Link className="ftr-link" to="/about">
                About
              </Link>
              <Link className="ftr-link" to="/contact">
                Contact
              </Link>
            </div>
            <div className="footer-icons">
              <a
                href="https://www.facebook.com/saurav.ghosal.796"
                target="_blank"
                class="fa fa-facebook-square"
              ></a>
              <a
                href="https://www.linkedin.com/in/saurav-ghosal-b71033171/"
                target="_blank"
                class="fa fa-linkedin-square"
              ></a>
              <a
                href="https://www.instagram.com/ghosalsaurav/"
                target="_blank"
                class="fa fa-instagram"
              ></a>
              <a
                href="https://twitter.com/SauravGhosal3"
                target="_blank"
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
