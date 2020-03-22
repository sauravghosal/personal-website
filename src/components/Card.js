import React from "react";

const Card = props => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      data-aos="fade-up"
    >
      <div className="card__media">
        <img src={props.img} alt="project graphic" />
      </div>
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
      <div className="card__content">
        <header className="card__header">
          <h2 class="card__title">{props.name}</h2>
          <p>{props.content}</p>
        </header>
        <div className="card-tags">
          {props.tags.map(tag => {
            return <div className="tag">{tag}</div>;
          })}
        </div>
      </div>
    </a>
  );
};

export default Card;
