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

function About() {
  return (
    <div className="about__section">
      <div className="about__left">
        <div className="about__img__wrapper">
          <img src={profilePic} alt="Andrew smiling" />
        </div>
      </div>
      <div className="about__right">
        <h4 className="about__intro">About</h4>
        <h2 className="about__title">Get to know me.</h2>
        <p className="about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dolore explicabo perferendis adipisci hic suscipit commodi voluptates
          id perspiciatis doloremque repudiandae sapiente, exercitationem
          quaerat, ab nam? Ab facere perspiciatis neque deserunt quidem quo.
          Accusantium minima veniam autem similique molestiae reiciendis error
          hic, eligendi est sit perspiciatis dolorem tempore. Ipsum, assumenda.
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
      </div>
    </div>
  );
}

export default About;
