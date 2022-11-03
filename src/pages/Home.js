/** @format */

import React from "react";

import MyCv from "../HaimYeshurun.pdf";

// styles
import "../styles/home.css";

function Home() {
  // -----------------------------------------------------
  // Looping the text to add a span with animation
  // -----------------------------------------------------

  // const title =
  //   " I am a Web developer during the day and a dreamer during the night.";

  // const spanText = title
  //   .split("")
  //   .map((letter) => {
  //     return letter;
  //   })
  //   .join(<span>''</span>);
  // console.log(spanText);

  // -----------------------------------------------------
  // -----------------------------------------------------
  // -----------------------------------------------------

  // Function will execute on click of button
  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch("HaimYeshurun.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "HaimYeshurun.pdf";
  //       alink.click();
  //     });
  //   });
  // };

  return (
    <section className='wrapper home ' id='home'>
      <div className='title-container'>
        <h1 className='main-title'>
          <span className='letter-animation'>H</span>i there, <br /> my name is
          <span className='name'>Haim</span>
        </h1>
        <p className='main-p'>
          I am a Web developer during the day and a dreamer during the night.
        </p>

        <div className='resume-container'>
          {/* <button onClick={onButtonClick} className='btn'>
            Resume
          </button> */}
          <a href={MyCv} download={"Haim-Yeshurun-CV"} className='btn'>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
