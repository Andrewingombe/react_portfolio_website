import React from "react";
import "./App.scss";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
