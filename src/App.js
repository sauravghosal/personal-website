import React from "react";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import About from "./pages/About";
import avatarImage from "./assets/images/avatar.webp";
import { BiRightArrowCircle } from "react-icons/bi";
import {
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Resume from "./assets/documents/resume.pdf";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Circles from "./components/Circles";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div
        className="px-10 sm:px-12 md:px-16 lg:px-60 bg-gray-100 overflow-hidden w-full "
        style={{ height: "calc(100vh - 3.5rem)" }}
      >
        <Circles top={[32, 32]} left={[3, 10]} />
        <Circles bottom={[0, 0]} right={[10, 10]} />
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects/:id">
            <Project />
          </Route>
          <Route exact path="/">
            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center mb-10 h-full">
              <div className="space-y-3 bg-white z-10 p-5 rounded-lg mr-5">
                <div>
                  <p className="font-light">Hi, my name is</p>
                  <h1 className="text-4xl md:text-5xl">Saurav Ghosal.</h1>
                </div>
                <p className="font-light">
                  I'm a software developer looking to create technology that
                  drives change.
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
                  className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-extrabold py-2 px-4 rounded hover:no-underline cursor-pointer m-2"
                >
                  Download My Resume
                </a>
                <Link
                  to={"/projects"}
                  className="inline-block bg-blue-300 hover:bg-blue-400 text-white font-extrabold py-2 px-4 rounded hover:no-underline cursor-pointer animate-bounce"
                >
                  <div className="flex items-center">
                    See my projects
                    <BiRightArrowCircle className="mx-2" />
                  </div>
                </Link>
              </div>
              <div className="p-5 md:p-0 z-10">
                <img
                  src={avatarImage}
                  className="rounded-full"
                  height="300px"
                  width="300px"
                  alt="avatar"
                />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
