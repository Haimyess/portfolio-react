/** @format */

import React from "react";

// Styles
import "../styles/stack.css";

function Stack() {
  const skills = [
    { id: 1, name: "Html", image: "https://pixabay.com/images/id-2582748/" },
    { id: 1, name: "Css", image: "https://pixabay.com/images/id-2582747/" },
    {
      id: 1,
      name: "JavaScript",
      image: "https://pixabay.com/images/id-736400/",
    },
    {
      id: 1,
      name: "React",
      image:
        "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    },
    { id: 1, name: "Node.js", image: "https://pixabay.com/images/id-736399/" },
    {
      id: 1,
      name: "Postgres",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1080px-Postgresql_elephant.svg.png?20080116191800",
    },
  ];

  return (
    <section className=' wrapper  stack' id='stack'>
      <h1>Stack</h1>
      <div className=' flex'>
        {skills.map((skill) => {
          return (
            <div key={skill.id} className='flex-item'>
              <img src={skill.image} alt='' />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stack;
