import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/default.css";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Element id="hero" name="hero">
        <Hero />
      </Element>
      <Element id="projects" name="projects">
        <Projects />
      </Element>
      <Element id="about" name="about">
        <About />
      </Element>
      <Element id="contact" name="contact">
        <Contact />
        <Footer />
      </Element>
    </React.Fragment>
  );
}

export default App;
