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
      name: "Movie App",
      img: "https://live.staticflickr.com/65535/52502791589_cf85fcdf4f_k.jpg",
      link: "https://muvi-app.netlify.app/",
      github: "https://github.com/Haimyess/movie-app",
      desc: "React App to find out about movies, with a search, favorites page and dark mode",
      tech: ["React", "Node.js", "API"],
    },
    {
      id: 2,
      name: "Event Booking app",
      img: "https://live.staticflickr.com/65535/52546319161_d8a91b2364_k.jpg",
      link: "https://outlandlife.netlify.app",
      github: "https://github.com/Haimyess/events-booking-client",
      desc: "Fullstack App to find the events in the city. There is a login functionality, that allow users to create and admin their events. Also is possible to filter to get a more accurate search and leave reviews in each event. Future implementation of ticket rendering and payment method",
      tech: ["React", "Node.js", "Postgres"],
    },
    {
      id: 3,
      name: "Shopy Ecommerce Fullstack",
      img: "https://live.staticflickr.com/65535/52471628481_42bb155c82_o.jpg",
      link: "https://shopy-ecommerce-app.netlify.app/",
      github: "https://github.com/Haimyess/ecommerce-fullstack-frontend",
      desc: "Fullstack project supermarket with login, sort, search and filtering.",
      tech: ["React", "Node.js", "Postgres"],
    },
    {
      id: 4,
      name: "100 Days Coding React",
      img: "https://live.staticflickr.com/65535/52472171153_10148b4eef_o.jpg",
      link: "https://100daycoding.netlify.app/",
      github: "https://github.com/Haimyess/100daysofcode",
      desc: "A series of mini projects to practice focused on functionality, such as load more, dark mode, form validation, todo list and more.",
      tech: ["React", "Node.js"],
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
