import React from "react";
import styles from "./styles.scss";

const card = props => {
  return (
    <div className={styles["card-content"]}>
      <div className={styles["thumbnail"]}>
        <img src={props.thumbnail} />
      </div>

      <div className={styles["text"]}>
        <div className={styles["title"]}>{props.name}</div>
        <div className={styles["description"]}>{props.description}</div>
        <div className="card">
          <h3>{props.name}</h3>
          <div className={styles["tags"]}>
            {props.tags.map((tag, i) => {
              return (
                <span className={styles["tag"]}>
                  {typeof tag === "function" ? tag() : tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
