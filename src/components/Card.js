import React from "react";

const Card = props => {
  return (
    <div className="card">
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="image"
        data-aos="fade-up"
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
        {props.tags.map(tag => {
          return <div className="tag">{tag}</div>;
        })}
      </div>
    </div>
  );
};

export default Card;
