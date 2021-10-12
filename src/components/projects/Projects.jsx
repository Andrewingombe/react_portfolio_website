import React from "react";
import ProjectCard from "../projectCard/ProjectCard";
import "./projects.scss";
import { projects } from "../../data.js";

function Projects() {
  return (
    <div className="projects__section">
      <h4 className="projects__intro">Projects</h4>
      <h2 className="projects__title">Take a look at my work</h2>
      <div className="projects__wrapper">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              img={project.img}
              title={project.title}
              text={project.text}
              demo={project.demo}
              code={project.code}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
