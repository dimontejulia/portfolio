import React from "react";

function Navigation(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top ">
      <a class="navbar-brand" href="/">
        Julia Di Monte
      </a>
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
            <a class="nav-link" href="#about">
              About <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#education">
              Education
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#work">
              Work Experience
            </a>
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
  );
}

export default Navigation;
