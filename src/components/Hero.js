import React from "react";
import JumboTron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Hero() {
  // takes in title, subtitle, text as props
  return (
    <JumboTron style={{ backgroundColor: "#E7ECFF" }} fluid>
      <div className="jumbotron-content">
        <div className="jumbotron-text">
          <h1>Hey there!</h1>
          <p>
            My name is <strong>Saurav Ghosal</strong>, and I’m a 2nd year CS
            student at <strong>Georgia Tech</strong> with threads in
            Intelligence and People. I’ve built this website to highlight the CS
            projects that I’ve worked while at Tech!
          </p>
          <Button onClick={() => console.log("clicked")}>Let's Chat</Button>
        </div>
        <div className="jumbotron-img">
          <img
            src={require("../assets/images/avatar.png")}
            className="avatar-img"
            alt="avatar"
          />
        </div>
      </div>
    </JumboTron>
  );
}

export default Hero;
