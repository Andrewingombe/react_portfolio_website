import React from "react";
import "./App.scss";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

function App() {
  return (
    <div className="container">
      <Hero />
      <About />
    </div>
  );
}

export default App;
