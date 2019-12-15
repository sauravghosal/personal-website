import React from "react";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import CarouselComponent from "../components/CarouselComponent";

function HomePage(props) {
  return (
    <Container>
      <Hero
        title={props.home.title}
        subtitle={props.home.subtitle}
        text={props.home.text}
      />
      <CarouselComponent />
    </Container>
  );
}

export default HomePage;
