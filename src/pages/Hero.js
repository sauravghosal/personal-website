import React from "react";
import Scroll from "react-scroll";
import avatarImage from "../assets/images/avatar.jpg";
import {
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Resume from "../assets/documents/resume.pdf";

function Hero() {
  return (
    <div className="h-screen">
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center h-screen">
        <div className="space-y-3 md:w-1/2">
          <div>
            <p className="font-light">Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl">Saurav Ghosal.</h1>
          </div>
          <p className="font-light">
            I'm a software developer looking to create technology that drives
            change.
          </p>
          <div className="flex space-x-5 text-xl">
            <a
              href="mailto:sghosal9@gatech.edu"
              alt="GitHub Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/sauravghosal"
              alt="GitHub Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-400" />
            </a>

            <a
              href="https://www.facebook.com/saurav.ghosal.796"
              alt="Facebook Link"
              target="_blank"
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-blue-400" />
            </a>
          </div>
          <a
            href={Resume}
            target="_blank"
            download="Saurav Ghosal Resume"
            className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-extrabold py-2 px-4 rounded hover:no-underline cursor-pointer"
          >
            Download My Resume
          </a>
        </div>
        <div className="p-5 md:p-0">
          <img
            src={avatarImage}
            className="rounded-full"
            height="300px"
            width="300px"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
