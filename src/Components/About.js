import React from "react";
import "../index.scss";
import headshot from "../Images/headshot.jpg";
import AboutText from "./AboutText";
import Education from "../Components/Education";

function About(props) {
  return (
    <div id="about">
      <h3>About</h3>
      <hr />
      <div class="aboutContainter">
        <div>
          <img id="headshot" src={headshot} alt="Logo" />
        </div>
        <AboutText />
      </div>
      <br />
      <div>
        <hr />
        <Education />
      </div>
    </div>
  );
}

export default About;
