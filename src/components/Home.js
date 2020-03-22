import React from "react";
import Card from "./Card";
import biary from "../assets/images/biary-img.png";
import FunkyFridge from "../assets/images/funky-fridge-img.png";

const cards = [
  {
    name: "Biary (Digital Diary)",
    content:
      "An online diary that detects your mood and gives appropriate feedback!",
    link: "https://github.com/sauravghosal/biary",
    img: biary,
    attribution: false,
    tags: ["React", "JavaScript"]
  },
  {
    name: "Funky Fridge",
    content: "An Android app to keep track of items in your fridge!",
    link: "https://github.com/funkyfridge",
    img: FunkyFridge,
    attribution: true,
    tags: ["Android Studio", "Kotlin"]
  }
];

const Home = () => (
  <div className="content">
    <h1>Projects</h1>
    <div className="card-container">
      {cards.map(card => {
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
    </div>
  </div>
);

export default Home;
