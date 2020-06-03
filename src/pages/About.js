import React from "react";
import Scroll from "react-scroll";
import Footer from "../components/Footer";
const Link = Scroll.Link;

const About = () => {
  return (
    <div className="page about">
      <div className="content">
        <h1>My Background</h1>
        <p>
          Hello! My name is Saurav Ghosal, and I'm a second year student
          studying computer science at Georgia Tech.
          <strong> GO JACKETS! </strong>
        </p>
        <p>
          I primarily code in Java. I've taken Object-Oriented Programming in
          Java, and am in the process of taking Data Structures and Algorithms.
          I also know Python, JavaScript (React and Node), and Matlab—and I'm
          always willing to pick up new programming skills!
        </p>
        <p>
          I love to learn new things. I'm very invested in music: I sing and
          play the piano. I enjoy breaking down chord progressions and listening
          for harmonies. One day, I hope to work in a field that bridges my
          interest in music with my passion for computer science.
        </p>
        <p>
          Take a look at my previous projects to get an idea of what I've worked
          on. Also, don't hesitate to reach out if you have any questions!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
