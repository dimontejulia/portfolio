import React from "react";
import "../index.scss";

function Home(props) {
  return (
    <div class="jumbotron d-flex align-items-center justify-content-center flex-column">
      <h1 class="display-4">Julia Di Monte</h1>

      <p class="lead">
        As a web developer and graduate of Queen's University with a Bachelor of
        Computing, I look for opportunities to compliment my passion for
        innovation and technology. I have experience working on various stages
        of the software development lifecycle as a quality assurance engineer
        and in product support and am looking to gain more experience developing
        as a full stack developer. My interests range from software
        applications, social media, fashion, design, music, and sports.
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
    </div>
  );
}

export default Home;
