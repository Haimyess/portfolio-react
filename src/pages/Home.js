/** @format */

import React from "react";

// import MyCv from ".../src/HaimYeshurun.pdf";

// styles
import "../styles/home.css";
function Home() {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("haim-yeshurun.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "haim-yeshurun.pdf";
        alink.click();
      });
    });
  };

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
          <button onClick={onButtonClick} className='btn'>
            Resume
          </button>
          {/* <a href={MyCv} download={MyCv} className='btn'>
            Resume
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
