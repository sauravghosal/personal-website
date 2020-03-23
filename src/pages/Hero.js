import React from "react";
import Scroll from "react-scroll";
const Link = Scroll.Link;

function Hero() {
  // takes in title, subtitle, text as props
  return (
    <div className="page hero">
      <div className="jumbotron-content">
        <div className="jumbotron-text">
          <h1>
            Hey, I'm <span>Saurav Ghosal.</span>
          </h1>
          <p>
            2nd year CS student at <strong>Georgia Tech</strong>
          </p>
          <p>Threads in Intelligence and People.</p>
          <ul>
            <li class="fa fa-facebook grow"></li>
            <li class="fa fa-twitter grow"></li>
            <li class="fa fa-google grow"></li>
            <li class="fa fa-github grow"></li>
            <li class="fa fa-codepen grow"></li>
          </ul>
        </div>
        <div className="jumbotron-img">
          <img
            src={require("../assets/images/avatar.jpg")}
            className="avatar-img"
            alt="avatar"
          />
        </div>
      </div>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
        className="arrow"
      >
        <div>
          <i class="arrow down"></i>
        </div>
      </Link>
    </div>
  );
}

export default Hero;
