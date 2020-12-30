import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Home from "./Components/Home";
import Education from "./Components/Education";
import WorkExperience from "./Components/WorkExperience";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Navigation />
        <Home />
        <About />
        <Education />
        <Projects />
        <WorkExperience />
        <Skills />
      </div>
    </div>
  );
}

export default App;
