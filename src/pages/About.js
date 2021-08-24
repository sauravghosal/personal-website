import React from "react";
import {
  SiReact,
  SiNextDotJs,
  SiAmazonaws,
  SiTypescript,
  SiPython,
  SiJava,
  SiJavascript,
  SiNodeDotJs,
  SiStorybook,
  SiVisualstudio,
} from "react-icons/si";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page about">
      <div className="flex items-center">
        <h2 className="mr-2 font-extrabold">About Me</h2>
        <hr className="flex-grow" />
      </div>
      <div className="min-h-screen flex flex-col justify-center">
        <p className="text-lg">
          Hello! My name is Saurav Ghosal, and I'm a fourth year student
          studying computer science at Georgia Tech.
          <strong> GO JACKETS! </strong>
        </p>
        <p className="text-lg">
          I primarily code in Java. I've taken Object-Oriented Programming in
          Java, Data Structures, and Algorithms at my university. I also know
          Python, JavaScript (React and Node), and TypeScript. I have listed
          below some of the web technologies I'm most familiar with!
        </p>
        <div className="flex flex-row flex-wrap space-x-3 text-orange-400 opacity-80">
          <SiReact className="h-24 w-auto self-start" />
          <SiNextDotJs className="h-24 w-auto self-end" />
          <SiAmazonaws className="h-24 w-auto self-center" />
          <SiTypescript className="h-24 w-auto" />
          <SiPython className="h-24 w-auto" />
          <SiJava className="h-24 w-auto" />
          <SiJavascript className="h-24 w-auto" />
          <SiNodeDotJs className="h-24 w-auto" />
          <SiStorybook className="h-24 w-auto" />
          <SiVisualstudio className="h-24 w-auto" />
        </div>
        <p className="text-lg">
          Aside from programming, I'm very invested in music: I sing and play
          the piano. I enjoy breaking down chord progressions and listening for
          harmonies. I also
        </p>
        <p className="text-lg">
          Take a look at my previous projects to get an idea of what I've worked
          on. Also, don't hesitate to reach out if you have any questions!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
