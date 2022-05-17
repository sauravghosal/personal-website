import React, { useContext, useEffect } from "react";
import avatarImage from "../assets/images/avatar.webp";
import { BiRightArrowCircle } from "react-icons/bi";
import { ReactComponent as CloudSVG } from "../assets/images/cloud.svg";
import {
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Resume from "../assets/documents/resume.pdf";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { ThemeContext } from "../App";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("tooltip").classList.remove("opacity-100");
      document.getElementById("tooltip").classList.add("opacity-0");
    }, [3000]);
  }, []);

  return (
    <ParallaxProvider>
      <section className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center mb-10 min-h-screen dark:text-slate-300">
        <Parallax
          translateY={[100, -100]}
          className="absolute top-32 left-5 opacity-30 hidden sm:block"
        >
          <CloudSVG />
        </Parallax>

        <Parallax
          translateY={[100, -100]}
          className="absolute left-1/4 opacity-30 hidden sm:block"
          style={{ top: "600px" }}
        >
          <CloudSVG />
        </Parallax>

        <Parallax
          translateY={[100, -100]}
          className="absolute top-40 right-16 opacity-30 hidden sm:block"
        >
          <CloudSVG />
        </Parallax>
        <div
          className={`space-y-3 dark:bg-slate-800 border bg-white dark:border dark:border-slate-300/20 p-5 rounded-lg shadow-md mr-5 z-10 relative`}
        >
          <div>
            <p className="font-light">Hi, my name is </p>
            <h1 className="font-extrabold text-5xl dark:text-white">
              Saurav Ghosal.
            </h1>{" "}
          </div>
          <p className="font-light">
            I am looking to apply my experience with software development to
            build, test, and design technology that affects change.
          </p>
          <div className="flex space-x-5 text-xl">
            <a
              href="mailto:sghosal9@gatech.edu"
              alt="GitHub Link"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope className="hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/sauravghosal"
              alt="GitHub Link"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-blue-400" />
            </a>

            <a
              href="https://www.facebook.com/saurav.ghosal.796"
              alt="Facebook Link"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="hover:text-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/saurav-ghosal-b71033171/"
              alt="LinkedIn Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <a
              href="https://twitter.com/SauravGhosal3"
              alt="Twitter Link"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="hover:text-blue-400" />
            </a>
          </div>
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            download="Saurav Ghosal Resume"
            className={`inline-block bg-orange-400 hover:bg-orange-500 dark:bg-orange-200 dark:hover:bg-orange-300 dark:text-slate-800 text-white font-extrabold py-2 px-4 rounded hover:no-underline cursor-pointer mr-1`}
          >
            Download My Resume
          </a>
          <Link
            to="/#projects"
            smooth
            className="items-center inline-block bg-blue-300 hover:bg-blue-400 dark:bg-blue-200 dark:hover:bg-blue-300 dark:text-slate-800 text-white font-extrabold py-2 px-4 rounded hover:no-underline cursor-pointer animate-bounce m-1"
          >
            <div className="flex items-center">
              See my projects
              <BiRightArrowCircle className="mx-2" />
            </div>
          </Link>

          <div className="inline-flex mx-2 relative">
            <div
              className="flex items-center cursor-pointer relative mb-4"
              onClick={() => toggleTheme()}
            >
              <input type="checkbox" className="sr-only" />
              <div
                className={`after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition after:shadow-sm bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full ${
                  theme === "dark" &&
                  "after:transform after:translate-x-full after:border-white bg-blue-600 border-blue-600;"
                }`}
              />
            </div>
            <div
              id="tooltip"
              className="transition w-36 dark:bg-slate-600/30 dark:border-slate-300/20 absolute -top-10 hidden xs:inline-block z-10 py-2 px-3 text-xs  bg-white rounded-lg border border-gray-200 shadow-sm opacity-100 tooltip"
            >
              Try switching modes!
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
        <div className="m-5 md:p-0 z-10 relative">
          <div className="absolute inset-0 rounded-full bg-slate-700/30 dark:block hidden" />
          <img
            src={avatarImage}
            className="rounded-full"
            width={350}
            height={350}
            alt="avatar"
          />
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default Home;
