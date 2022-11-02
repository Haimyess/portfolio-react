/** @format */

import React from "react";

// Styles
import "../styles/stack.css";

function Stack() {
  const skills = [
    {
      id: 1,
      name: "Html",
      image: "https://live.staticflickr.com/65535/52471867764_0c91ec7072_o.png",
    },
    {
      id: 2,
      name: "Css",
      image: "https://live.staticflickr.com/65535/52471867769_5bde06860f_o.png",
    },
    {
      id: 3,
      name: "JavaScript",
      image: "https://live.staticflickr.com/65535/52472133388_698fa68dc2_o.png",
    },
    {
      id: 4,
      name: "React",
      image: "https://live.staticflickr.com/65535/52471591761_bb8a2be04d_o.png",
    },
    {
      id: 5,
      name: "Node.js",
      image: "https://live.staticflickr.com/65535/52472048660_5edeb9ea5d_o.png",
    },
    {
      id: 6,
      name: "Postgres",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1080px-Postgresql_elephant.svg.png?20080116191800",
    },
  ];

  return (
    <section className=' wrapper  stack' id='stack'>
      <h1 className='sub-title title'>Stack</h1>
      <div className=' grid-skills'>
        {skills.map((skill) => {
          return (
            <div key={skill.id} className='flex-item animate'>
              <img className='stack-img' src={skill.image} alt='' />
              <p className='stack-name'>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stack;
