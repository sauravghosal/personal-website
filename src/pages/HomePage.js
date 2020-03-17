import React from "react";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import Card from "../components/Card";
import biary from "../assets/images/biary-img.jpg";
import FunkyFridge from "../assets/images/funky-fridge-img.jpg";
import Tag from "../components/Tag";

const cards = [
  {
    name: "Biary (Digital Diary)",
    description:
      "An online diary that detects your mood and gives appropriate feedback!",
    link: "https://github.com/sauravghosal/biary",
    img: biary,
    tags: ["React", "JavaScript"]
  },
  {
    name: "Funky Fridge",
    description: "An Android app to keep track of items in your fridge!",
    link: "https://github.com/funkyfridge",
    img: FunkyFridge,
    tags: ["Android Studio", "Kotlin"]
  }
];

function HomePage(props) {
  return (
    <Container fluid>
      <Hero
        title={props.home.title}
        subtitle={props.home.subtitle}
        text={props.home.text}
      />
      <div className="home-content">
        <h1>Projects</h1>
        <div className="card-container">
          {cards.map(card => {
            return <Card name={card.name} tags={card.tags} />;
          })}
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
