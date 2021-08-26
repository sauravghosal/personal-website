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
    <div className="min-h-screen">
      <div className="flex items-center">
        <h2 className="mr-2 font-extrabold">About &#38; Contact Me</h2>
        <hr className="flex-grow" />
      </div>
      <div className="space-y-3">
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
        <div className="flex flex-row flex-wrap space-x-3 text-orange-400 opacity-80 md:h-32 mx-auto">
          <SiReact className="h-20 w-auto self-start" />
          <SiNextDotJs className="h-20 w-auto self-end" />
          <SiAmazonaws className="h-20 w-auto self-start" />
          <SiTypescript className="h-20 w-auto self-end" />
          <SiPython className="h-20 w-auto self-start" />
          <SiJava className="h-20 w-auto self-end" />
          <SiJavascript className="h-20 w-auto self-start" />
          <SiNodeDotJs className="h-20 w-auto self-end" />
          <SiStorybook className="h-20 w-auto self-start" />
          <SiVisualstudio className="h-20 w-auto self-end" />
        </div>
        <p className="text-lg">
          I'm very interested in the CS for social good space, which I've
          developed through my involvement with Georgia Tech{" "}
          <a href="https://bitsofgood.org/" className="font-bold underline">
            Bits of Good
          </a>
          . As a developer in this organization, I am able to support non-profit
          groups, like the Boys and Girls Club of Atlanta, GTScheduler, among
          others, by building web applications to address critical pain points.
          In my future work, I would like to continue to leverage my technical
          skills to make social impact.
        </p>
        <p className="text-lg">
          Aside from programming, I'm very invested in music: I sing in a
          university-led acapella group, and I play the piano. I enjoy breaking
          down chord progressions and listening for harmonies.
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
