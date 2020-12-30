import React from "react";
import "../index.scss";

function Home(props) {
  return (
    <div class="jumbotron d-flex align-items-center justify-content-center flex-column">
      <h1 class="display-4">Julia Di Monte</h1>

      <p class="lead">
        Hello! I am a full-stack developer located in Toronto, Ontario.
      </p>
      <p class="lead">
        <a
          class="btn btn-primary btn-lg"
          href="https://drive.google.com/file/d/1zgq_XvziOhOBIB9bkadiT_s7lpXtvw_r/view?usp=sharing"
          role="button"
        >
          Download Resume
        </a>
      </p>
      <a href="#nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-arrow-down-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
          />
        </svg>
      </a>
    </div>
  );
}

export default Home;
