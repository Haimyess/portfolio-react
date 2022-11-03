/** @format */

import React, { useState } from "react";

// Components
import ProjectCard from "../components/ProjectCard";

function Projects() {
  // const [viewBtn, setViewBtn] = useState(false);

  // if (projects.length >= 2) {
  //   setViewBtn(true);
  // }

  const projects = [
    {
      id: 1,
      name: "Shopy Ecommerce Fullstack",
      img: "https://live.staticflickr.com/65535/52471628481_42bb155c82_o.jpg",
      link: "https://shopy-ecommerce-app.netlify.app/",
      github: "https://github.com/Haimyess/ecommerce-fullstack-frontend",
    },
    {
      id: 2,
      name: "100 Days Coding React",
      img: "https://live.staticflickr.com/65535/52472171153_10148b4eef_o.jpg",
      link: "https://100daycoding.netlify.app/",
      github: "https://github.com/Haimyess/100daysofcode",
    },
  ];

  return (
    <section className='wrapper container' id='projects'>
      <h1 className='sub-title title'>Projects</h1>
      <div className='flex project'>
        {projects.map((project) => {
          return <ProjectCard key={project.id} projects={project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
