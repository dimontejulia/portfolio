import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Projects from "./Projects";
import About from "./About";
import Home from "./Home";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";

function Navigation(props) {
  return (
    <Router>
      <div>
        <nav
          id="nav"
          class="sticky-top navbar navbar-expand-lg navbar-light bg-white sticky-top "
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to={"/"}>
                  About <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/education"}>
                  Education <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/projects"}>
                  Projects <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/work"}>
                  Work Experience <span class="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
            <span class="navbar-item">
              <button type="button" class="btn btn-link">
                <a
                  class="nav-link"
                  href="https://drive.google.com/file/d/1zgq_XvziOhOBIB9bkadiT_s7lpXtvw_r/view?usp=sharing"
                >
                  Download Resume
                </a>
              </button>
            </span>
          </div>
        </nav>
        <hr />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/education" component={Education} />
          <Route path="/work" component={WorkExperience} />
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
