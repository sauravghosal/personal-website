import React from "react";
import { animated } from "react-spring";

const Card = (props) => {
  return (
    <animated.div className="card" style={props.style}>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="image"
      >
        <img src={props.img} alt="project graphic" />
      </a>

      {props.attribution && (
        <div className="card-attribution">
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            rel="noopener noreferrer"
            className="Freepik"
          >
            Freepik
          </a>
        </div>
      )}
      <p>
        <b>{props.name}</b>
        &nbsp;&nbsp;{props.content}
      </p>
      <div className="card-tags">
        {props.tags.map((tag) => {
          return <div className="tag">{tag}</div>;
        })}
      </div>
    </animated.div>
  );
};

export default Card;
