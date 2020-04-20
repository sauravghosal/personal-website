import React from "react";
import { animated, useSpring } from "react-spring";

const Card = (props) => {
  const [flipped, set] = React.useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set((state) => !state)}>
      <animated.div
        className="card front"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
          backgroundImage: `url(${props.img})`,
          backgroundSize: "100%",
        }}
      ></animated.div>
      <animated.div
        class="card back"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
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
        </div>{" "}
      </animated.div>
    </div>
  );
};

export default Card;
