import React from "react";
import JumboTron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Hero(props) {
  // takes in title, subtitle, text as props
  return (
    <JumboTron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <img
            src={require("../assets/images/avatar.jpg")}
            alt="avatar"
            className="avatar-img"
          />
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder">{props.title}</h1>
            )}
            {props.subtitle && (
              <h3 className="display-4 font-weight-light">{props.subtitle}</h3>
            )}
            {props.text && (
              <h3 className="lead font-weight-light">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </JumboTron>
  );
}

export default Hero;
