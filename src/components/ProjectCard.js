/** @format */

import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ projects }) {
  return (
    <article>
      <div className='project-img'>
        <img src='' alt='' />
      </div>
      <div className='project-links'>
        <Link>Demo</Link>
        <Link>Code</Link>
      </div>
    </article>
  );
}

export default ProjectCard;
