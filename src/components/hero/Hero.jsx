import React from "react";
import "./hero.scss";
import heroImage from "../../img/hero_img.svg";

function Hero() {
  return (
    <div className="hero__section">
      <div className="hero__left">
        <div className="intro__wrapper">
          <h4 className="intro">Hi there! Am Andrew.</h4>
        </div>
        <h1 className="hero__title">
          I'm a <span>Front-end</span> Web Developer
        </h1>
        <p className="hero__text">
          I build, deploy and scale modern web applications using the MERN
          stack. <br /> My focus and passion is to help businesses digitally
          grow using technology.
        </p>
        <a href="#projects">
          <button className="btn"> View Projects</button>
        </a>
      </div>
      <div className="hero__right">
        <img src={heroImage} alt="a perosn coding on a laptop" />
      </div>
    </div>
  );
}

export default Hero;
