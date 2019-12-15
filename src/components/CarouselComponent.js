import React from "react";
import biary from "../assets/images/biary-img.jpg";
import FunkyFridge from "../assets/images/funky-fridge-img.jpg";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = props => {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const slides = [
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
  ];

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      {slides.map(slide => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={slide.img} alt="slide" />
            <Carousel.Caption>
              <h3>{slide.name}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
