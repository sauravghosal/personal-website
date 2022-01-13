import React from "react";

const About = () => {
  const emojiHexCodes = [
    "💻",
    "🪡",
    "🎶",
    "🎤",
    "🌱",
    "🌈",
    "🌎",
    "🎧",
    "💅🏽",
    "✨",
  ];
  return (
    <div className="min-h-screen">
      <h2 className="mr-2 font-extrabold my-5">About Me</h2>
      <div className="space-y-3 text-lg">
        <p>
          Hello! My name is Saurav Ghosal, and I'm a fourth year student
          studying computer science at Georgia Tech.
        </p>
        <p>
          For a more fun and visual representation of who I am as a person, here
          are some of my favorite emojis:{" "}
        </p>
        <div className="flex flex-wrap">
          {emojiHexCodes.map((emoji, index) => (
            <div
              className={`text-2xl px-2 animate-fade`}
              style={{ animationDuration: `${index}s` }}
            >
              {emoji}
            </div>
          ))}
        </div>

        <p>
          {" "}
          I have the most classroom experience coding in Java, but recently I've
          been working a lot with Python Flask on the server-side in my side
          projects. I've taken Object-Oriented Programming in Java, Data
          Structures, Algorithms, and a few ML/AI courses at my university. I
          also have a fair amount of experience developing user interfaces with
          front end frameworks/libraries like React and Vue!
        </p>
        <div className="flex flex-row flex-wrap space-x-3 text-blue-400 opacity-80 mx-auto"></div>
        <p>
          I'm very interested in the CS for social good space, which I've
          demonstrated through my involvement with Georgia Tech{" "}
          <a href="https://bitsofgood.org/" className="font-bold">
            Bits of Good
          </a>
          . As a developer in this organization, I can leverage my programming
          skills to build tech solutions that makes an impact on my community by
          supporting nonprofits, like the Boys and Girls Club of Atlanta, among
          others. In my future work, I would like to continue to leverage my
          technical skills to make social impact.
        </p>
        <p>
          Aside from programming, I'm very invested in music: I sing in a
          university-led acapella group called Infinite Harmony, and I play the
          piano. I am currently in a leadership position for the acapella group,
          which involves lots of time spent arranging and preparing our group's
          setlist.
        </p>
        <p>
          Take a look at my previous projects to get an idea of what I've worked
          on. Also, don't hesitate to reach out if you have any questions!{" "}
          {"❤️"}
        </p>
      </div>
    </div>
  );
};

export default About;
