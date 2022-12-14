/** @format */

import React from "react";

import MyCv from "../HaimYeshurunCVTech.pdf";

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

  const title = "Hi there!, my name is";
  const greetings = title.slice(0, 10);
  const restOfTex = title.slice(10);
  // console.log(greetings);

  return (
    <section className='wrapper home ' id='home'>
      <div className='circle top'></div>
      <div className='circle right'></div>
      <div className='circle left'></div>
      <div className='home-container'>
        <div className='title-container'>
          <div className='wrapper-text'>
            <h1 className='main-title'>
              {greetings.split("").map((letter, i) => {
                return (
                  <span className='animation' key={i}>
                    {letter}
                  </span>
                );
              })}{" "}
              <br />
              {/* <br /> */}
              {restOfTex.split("").map((letter, i) => {
                return (
                  <span className='animation ' key={i}>
                    {letter}
                  </span>
                );
              })}{" "}
              <span style={{ color: "var(--accent)" }}>H</span>
              <span className='animation'>aim</span>
            </h1>
            {/* <h1 className='main-title'>
              <span className='letter-animation'>H</span>i there, <br /> my name
              is
              <span className='name'>Haim</span>
            </h1> */}
            <p className='main-p'>
              I am a Web developer during the day and a dreamer during the
              night.
            </p>
          </div>
          <div className='resume-container'>
            {/* <button onClick={onButtonClick} className='btn'>
            Resume
          </button> */}
            <a href={MyCv} download={"Haim-Yeshurun-CV"} className='btn'>
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
