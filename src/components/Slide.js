import React from "react";
import Button from "react-bootstrap/Button";
import "./horizontal.css";

function Slide(props) {
  return (
    <div
      className="slide"
      style={{
        background: `url('${props.slide.img}') no-repeat center center`
      }}
    >
      <div className="center">
        <h1>{props.slide.name}</h1>
        <p>{props.slide.description}</p>
        <Button href={props.slide.link}>GitHub</Button>
      </div>
    </div>
  );
}

export default Slide;
