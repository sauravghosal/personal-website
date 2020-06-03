import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Made by <strong>Saurav Ghosal</strong>
      </p>
      <div className="footer-icons">
        <a
          href="mailto:sghosal9@gatech.edu"
          alt="GitHub Link"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-envelope"
        ></a>
        <a
          href="https://github.com/sauravghosal"
          alt="GitHub Link"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-github"
        ></a>
        <a
          href="https://www.facebook.com/saurav.ghosal.796"
          alt="Facebook Link"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-facebook-square"
        ></a>
        <a
          href="https://www.linkedin.com/in/saurav-ghosal-b71033171/"
          alt="LinkedIn Link"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-linkedin-square"
        ></a>

        <a
          href="https://twitter.com/SauravGhosal3"
          alt="Twitter Link"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-twitter-square"
        ></a>
      </div>
    </footer>
  );
}

export default Footer;
