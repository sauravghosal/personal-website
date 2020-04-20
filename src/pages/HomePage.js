import React from "react";
import Hero from "../components/Hero";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Element } from "react-scroll";

function HomePage(props) {
  return (
    <React.Fragment>
      <Hero />
      <Element id="home" name="home">
        <Home />
      </Element>
      <Element id="about" name="about">
        <About />
      </Element>
      <Element id="contact" name="contact">
        <Contact />
      </Element>
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
