/** @format */

import React from "react";

// styles
import "../styles/home.css";
function Home() {
  return (
    <section className='wrapper home ' id='home'>
      <div className='title-container'>
        <h1 className='main-title'>
          Hi there, <br /> my name is Haim
        </h1>
        <p className='main-p'>
          I am a Web developer during the day and a dreamer during the night.
        </p>

        <div className='resume-container'>
          <button className='btn'>Resume</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
