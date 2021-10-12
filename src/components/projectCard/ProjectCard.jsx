import React from "react";
import "./projectCard.scss";

function ProjectCard({ img, title, text, demo, code }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt="fullstack web application" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <div className="card__buttons">
          <a className="btn" href={demo} target="_blank" rel="noreferrer">
            View Demo
          </a>
          <a className="btn" href={code} target="_blank" rel="noreferrer">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
