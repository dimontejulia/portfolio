import React from "react";

export default function Skills(props) {
  return (
    <div id="skills">
      <hr />
      <h3>Skills</h3>
      <hr />
      <div class="container">
        <div class="row ">
          <div class="col">
            <h4>Front End</h4>
            <p>Javascript, React, HTML, CSS, SCSS, JQuery</p>
          </div>
          <div class="col">
            <h4>Back End</h4>
            <p> Ruby, Rails, NodeJS, ExpressJS</p>
          </div>
          <div class="col">
            <h4>Databases</h4>
            <p>PostgreSQL, MySQL</p>
          </div>
          <div class="col">
            <h4>Languages</h4>
            <p>Python</p>
          </div>
          <div class="col">
            <h4>Testing</h4>
            <p>ESLint, Jest, Cypress</p>
          </div>
          <div class="col">
            <h4>Source Control Management</h4>
            <p>Github</p>
          </div>
          <div class="col">
            <h4>Soft Skills</h4>
            <p>Pair Programming, Teamwork, SCRUM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
