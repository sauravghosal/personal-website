import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="h-14 flex items-center justify-between border-t text-white p-3 bg-orange-400 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 dark:bg-slate-900">
      <p>
        Made with {"❤️"} by <strong>Saurav Ghosal</strong>
      </p>
      <div className="space-x-2 hidden xs:flex">
        <a
          href="mailto:sghosal9@gatech.edu"
          alt="Email"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer "
        >
          <FaEnvelope className="hover:text-blue-300" />
        </a>
        <a
          href="https://github.com/sauravghosal"
          alt="GitHub Link"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaGithub className="hover:text-blue-300" />
        </a>
        <a
          href="https://www.facebook.com/saurav.ghosal.796"
          alt="Facebook Link"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaFacebook className="hover:text-blue-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/saurav-ghosal-b71033171/"
          alt="LinkedIn Link"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <FaLinkedin className="hover:text-blue-300" />
        </a>

        <a
          href="https://twitter.com/SauravGhosal3"
          alt="Twitter Link"
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-twitter-square"
        >
          <FaTwitter className="hover:text-blue-300" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
