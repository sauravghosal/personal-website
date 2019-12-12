import React from "react";
import Container from "react-bootstrap/Container";
import biary from "../assets/images/biary-img.jpg";
import FunkyFridge from "../assets/images/funky-fridge-img.jpg";
import Slider from "react-animated-slider";
import "./horizontal.css";
import Slide from "./Slide";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          name: "Biary (Digital Diary)",
          description:
            "An online diary that detects your mood and gives appropriate feedback!",
          link: "https://github.com/sauravghosal/biary",
          img: biary
        },
        {
          name: "Funky Fridge",
          description: "An Android app to keep track of items in your fridge!",
          link: "https://github.com/funkyfridge",
          img: FunkyFridge
        },
        {
          name: "Funky Fridge",
          description: "An Android app to keep track of items in your fridge!",
          link: "https://github.com/funkyfridge",
          img: "https://i.imgur.com/ZXBtVw7.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <Container fluid={true}>
        <Slider autoplay={3000} className="slider" infinite={true}>
          {this.state.slides.map((item, index) => (
            <Slide slide={item} key={index} />
          ))}
        </Slider>
      </Container>
    );
  }
}
export default Carousel;
