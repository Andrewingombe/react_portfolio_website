import React from "react";
import "./about.scss";
import profilePic from "../../img/compressed.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
  faJsSquare,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about__section" id="about">
      <div className="about__left">
        <div className="about__img__wrapper">
          <img src={profilePic} alt="Andrew smiling" />
        </div>
      </div>
      <div className="about__right">
        <div className="about__wrapper">
          <h4 className="about__intro">About</h4>
        </div>
        <h2 className="about__title">Get to know me.</h2>
        <p className="about__text">
          My names are Andrew Ingombe and I am a Front-end developer with
          Back-end experience. I have been programming and developing for over a
          year now. <br /> <br /> Briefly, I started off with a degree in
          Business Administration and after working in the finance industry for
          8 years, I decided to take a different route and join the tech
          industry. <br /> <br /> I love programming. I am proficient in
          <span> React.js</span>, <span>Javascript</span>, <span>Node.js</span>{" "}
          and <span>MongoDB</span>. Download my CV below to learn more about me.
        </p>
        <h3 className="skills__title">My Skills</h3>
        <div className="skills__icons">
          <div className="icon__item">
            <FontAwesomeIcon icon={faJsSquare} className="icon" />
            <p className="icon__title">JavaScript</p>
          </div>
          <div className="icon__item">
            <FontAwesomeIcon icon={faReact} className="icon" />
            <p className="icon__title">React.js</p>
          </div>
          <div className="icon__item">
            <FontAwesomeIcon icon={faSass} className="icon" />
            <p className="icon__title">Sass</p>
          </div>
          <div className="icon__item">
            <FontAwesomeIcon icon={faNodeJs} className="icon" />
            <p className="icon__title">Node.js</p>
          </div>
          <div className="icon__item">
            <FontAwesomeIcon icon={faDatabase} className="icon" />
            <p className="icon__title">MongoDB</p>
          </div>
          <div className="icon__item">
            <FontAwesomeIcon icon={faGitAlt} className="icon" />
            <p className="icon__title">Git</p>
          </div>
        </div>
        <Link
          to="files/Andrew_Ingombe_Resume.PDF"
          className="download__btn"
          target="_blank"
          download
        >
          Download CV
        </Link>
      </div>
    </div>
  );
}

export default About;
