/** @format */

import React from "react";

// importing Styles
import "../styles/sociallinks.css";
// Importing Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
  return (
    <div className='social-links'>
      <a href={"https://github.com/Haimyess"} target='_blank' className='link'>
        <FontAwesomeIcon className='icon' icon={faGithub} />
      </a>
      <a
        href={"https://www.linkedin.com/in/haimyess/"}
        target='_blank'
        className='link'>
        <FontAwesomeIcon className='icon' icon={faLinkedinIn} />
      </a>
      <a
        href={"https://twitter.com/haimicoyess"}
        target='_blank'
        className='link'>
        <FontAwesomeIcon className='icon' icon={faTwitter} />
      </a>
    </div>
  );
}

export default SocialLinks;
