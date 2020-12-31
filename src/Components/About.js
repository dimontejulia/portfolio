import React from "react";
import "../index.scss";
import headshot from "../Images/headshot.jpg";

import Education from "../Components/Education";
function About(props) {
  return (
    <div id="about">
      <h3>About</h3>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div>
              <img
                class="float-left "
                id="headshot"
                src={headshot}
                alt="Logo"
              />
            </div>
          </div>
          <div class="col-6 my-auto">
            <div>
              <p>
                As a web developer and graduate of Queen's University with a
                Bachelor of Computing, I look for opportunities to compliment my
                passion for innovation and technology. While at Queen's
                University I was actively involved in campus life and
                student-run organizations. Notably, in my final year, I served
                as the Marketing Director of{" "}
                <a href="https://qhacks.io/">QHacks</a>., a student-organized
                500 person hackathon.
              </p>
              <p>
                I have experience working on various stages of the software
                development lifecycle as a Quality Assurance Engineer at{" "}
                <a href="https://en.rockcontent.com/">ScribbleLive</a> and{" "}
                <a href="https://www.ecobee.com/en-ca/">ecobee</a> and most
                recently in Product Support at{" "}
                <a href="https://www.sap.com/canada/index.html">SAP</a>. I am
                currently a student at{" "}
                <a href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>, in
                a 12-week immersive full-stack web development boot camp program
                specializing in Javascript, HTML/CSS, SQL, React, and Ruby/Ruby
                on Rails. With my upcoming graduation from the program, I am
                looking to gain more development experience working as a
                full-stack developer.
              </p>
              <p>
                I love to travel and cook and run a food blog in my spare time
                on Instgram{" "}
                <a href="https://www.instagram.com/juliaeatzworld/">
                  @juliaeatzworld
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <Education />
      </div>
    </div>
  );
}

export default About;
