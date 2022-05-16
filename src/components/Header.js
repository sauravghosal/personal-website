import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import Resume from "../assets/documents/resume.pdf";
import { FaBars } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const clickOutside = (e) => {
      if (showNav && !document.getElementById("drawer").contains(e.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [showNav]);

  return (
    <header className="sticky h-14 bg-orange-400/90 text-white flex justify-between top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50 border-b dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <Link to="/#" className="flex items-center h-30 w-20" smooth>
        <Logo />
      </Link>
      <nav className="flex items-center">
        <FaBars
          onClick={() => setShowNav(!showNav)}
          className="xs:hidden m-2 mr-5 cursor-pointer"
        ></FaBars>
        <div
          id="drawer"
          className={`fixed  ${
            showNav ? "opacity-100" : "opacity-0"
          }  flex flex-col w-full top-14 text-black dark:bg-slate-800/90 xs:dark:bg-transparent xs:text-white font-bold xs:block xs:opacity-100 xs:space-x-4 xs:static left-0 right-0 space-y-2 bg-gray-200/90 xs:bg-transparent xs: dark:text-slate-200 dark:hover:text-slate-300 p-5 transition-opacity ease-in duration-200 border-b border-slate-300/20 xs:border-none`}
        >
          <Link
            to="/#top"
            smooth
            className="border-b border-gray-600/50 dark:border-slate-300/20 self-start xs:border-none"
          >
            Home
          </Link>

          <Link
            to="/#projects"
            smooth
            className="border-b border-gray-600/50 dark:border-slate-300/20 self-start xs:border-none"
          >
            Projects
          </Link>

          <Link
            to="/#about"
            smooth
            className="border-b border-gray-600/50 self-start xs:border-none"
          >
            About
          </Link>

          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Saurav Ghosal Resume"
            className="border-b border-gray-600/50 dark:border-slate-300/20 self-start xs:border-none"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
