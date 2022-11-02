/** @format */

import React from "react";

// import styles
import "../styles/projects.css";
function ProjectCard({ projects }) {
  // Open new tab links

  return (
    <article>
      <div className='project-img'>
        <img src='' alt='' />
      </div>
      <div className='project-links'>
        <img className='project-img' src={projects.img} />{" "}
        <div className='hover-info'>
          <p className='project-name'>{projects.name}</p>
          <div className='project-links-container'>
            <a href={projects.link} className='project-link'>
              Demo
            </a>
            <a
              href={projects.github}
              target='_blank'
              rel='noopener noreferrer'
              className='project-link'>
              {" "}
              Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
