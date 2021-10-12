import React from "react";
import "./App.scss";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
