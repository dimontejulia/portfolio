import React from "react";

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div id="projects">
      <div id="banner" class="jumbotron jumbotron-fluid">
        <div class="container">
          <h2 class="display-4">Projects</h2>
        </div>
      </div>
      <h3>Food Ordering Web Application</h3>
      <a href="https://github.com/dimontejulia/mood4food">Github Page</a>
      <ul>
        <li>
          Food ordering web application where users can order food, receive an
          SMS notification and SMS updates from a "restaurant" user.
        </li>
        <li>
          Multi-page APP built with HTML, CSS, Javascript, jQuery, and AJAX on
          the client-side, and Node, Express, and SQL on the server-side.
        </li>
        <li>SMS functionality was implemented with Twilio, an SMS API.</li>
      </ul>
      <h3>Interview Scheduler </h3>
      <a href="https://github.com/dimontejulia/scheduler">Github Page</a>
      <ul>
        <li>
          React application that allows users to book and cancel interviews.
        </li>
        <li>
          Worked with Storybook for component creation, Axios for API imports,
          and testing was done with Jest and Cypress.
        </li>
      </ul>
      <h3>Tweeter</h3>
      <a href="https://github.com/dimontejulia/tweeter">Github Page</a>
      <ul>
        <li>
          Simplified single-page Twitter clone where users can write, edit and
          delete tweets.
        </li>
        <li>
          A Single Page App built with HTML, CSS, JS, jQuery, and AJAX on the
          client-side, and Node, Express, and MongoDB on the server-side.
        </li>
      </ul>
    </div>
  );
}

export default Projects;
