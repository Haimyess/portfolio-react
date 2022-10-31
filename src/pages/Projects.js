/** @format */

import React from "react";

// Components
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Shopy Ecommerce Fullstack",
      img: {},
      link: "https://shopy-ecommerce-app.netlify.app/",
      github: "https://github.com/Haimyess/ecommerce-fullstack-frontend",
    },
    {
      id: 2,
      name: "100 Days Coding React",
      img: {},
      link: "https://100daycoding.netlify.app/",
      github: "https://github.com/Haimyess/ecommerce-fullstack-frontend",
    },
  ];

  return (
    <section className='wrapper projects' id='projects'>
      <h1>Projects</h1>
      <div>
        {projects.map((project) => {
          return <ProjectCard projects={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
