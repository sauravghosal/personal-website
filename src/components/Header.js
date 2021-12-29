import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Resume from "../assets/documents/resume.pdf";

const Header = () => {
  return (
    <header className="flex h-14 justify-between items-center p-3 bg-orange-400 text-white">
      <Link to="/" className="flex items-center">
        <img src={logo} className="h-30 w-20 filter drop-shadow-md" />
      </Link>
      <nav className="flex space-x-4">
        <Link to="/">Home</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/about">About</Link>

        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          download="Saurav Ghosal Resume"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
