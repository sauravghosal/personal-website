import React from "react";
import Card from "../components/Card";
import biary from "../assets/images/biary-img.png";
import funkyFridge from "../assets/images/funky-fridge-img.png";
import bgcSafety from "../assets/images/bgc-safety.png";
import { useScroll } from "react-use-gesture";
import { useSpring } from "react-spring";
import Scroll from "react-scroll";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
const Link = Scroll.Link;

const cards = [
  {
    name: "Biary (Digital Diary)",
    content:
      "An online diary that detects your mood and gives appropriate feedback",
    link: "https://github.com/sauravghosal/biary",
    img: biary,
    attribution: false,
    tags: ["React", "JavaScript"],
  },
  {
    name: "Bus Check-in System",
    content:
      "A web app to help children in the Boys and Girls club check into their buses",
    link: "https://github.com/funkyFridge",
    img: bgcSafety,
    attribution: false,
    tags: ["NextJS", "JavaScript"],
  },
  {
    name: "Funky Fridge",
    content: "An Android app to keep track of items in your fridge",
    link: "https://github.com/funkyFridge",
    img: funkyFridge,
    attribution: true,
    tags: ["Android Studio", "Kotlin"],
  },
  {
    name: "Funky Fridge",
    content: "An Android app to keep track of items in your fridge",
    link: "https://github.com/funkyFridge",
    img: funkyFridge,
    attribution: true,
    tags: ["Android Studio", "Kotlin"],
  },
  {
    name: "Funky Fridge",
    content: "An Android app to keep track of items in your fridge",
    link: "https://github.com/funkyFridge",
    img: funkyFridge,
    attribution: true,
    tags: ["Android Studio", "Kotlin"],
  },
  {
    name: "Funky Fridge",
    content: "An Android app to keep track of items in your fridge",
    link: "https://github.com/funkyFridge",
    img: funkyFridge,
    attribution: true,
    tags: ["Android Studio", "Kotlin"],
  },
  {
    name: "Funky Fridge",
    content: "An Android app to keep track of items in your fridge",
    link: "https://github.com/funkyFridge",
    img: funkyFridge,
    attribution: true,
    tags: ["Android Studio", "Kotlin"],
  },
  {
    name: "Funky Fridge",
    content: "An Android app to keep track of items in your fridge",
    link: "https://github.com/funkyFridge",
    img: funkyFridge,
    attribution: true,
    tags: ["Android Studio", "Kotlin"],
  },
  {
    name: "Funky Fridge",
    content: "An Android app to keep track of items in your fridge",
    link: "https://github.com/funkyFridge",
    img: funkyFridge,
    attribution: true,
    tags: ["Android Studio", "Kotlin"],
  },
];

const Projects = () => {
  return (
    <div className="page project">
      <div className="project-content">
        <h1>Projects</h1>

        <PerfectScrollbar
          className="card-container"
          options={{ suppressScrollY: true }}
          component="div"
        >
          {cards.map((card, i) => {
            return (
              <Card
                name={card.name}
                content={card.content}
                link={card.link}
                img={card.img}
                attribution={card.attribution}
                tags={card.tags}
              />
            );
          })}
        </PerfectScrollbar>
      </div>

      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
        className="arrow"
      >
        <i class="arrow down"></i>
      </Link>
    </div>
  );
};

export default Projects;
