import React from "react";
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function HomePage(props) {
  return (
    <Container>
      <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
      <Carousel />
    </Container>
  );
}

export default HomePage;
