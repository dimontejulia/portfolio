import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
