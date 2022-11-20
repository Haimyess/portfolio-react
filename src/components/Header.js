/** @format */

import React, { useState } from "react";

import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";

import "../styles/header.css";

import { HashLink } from "react-router-hash-link";

function Header() {
  const [showDiv, setShowDiv] = useState(false);

  console.log(showDiv);
  return (
    <div className='header-container'>
      <header className='nav-container' id={showDiv ? "changeColor" : ""}>
        <div className='leftside'>
          <HashLink
            to='#home'
            className='logo'
            smooth
            id={showDiv ? "hideLogo" : ""}>
            Haim Y.
          </HashLink>
        </div>
        {/* <p className='logo'>Haim Yeshurun</p> */}
        <div className='rightside'>
          <nav className='navbar'>
            <ul className='list' id={showDiv ? "hidden" : ""}>
              <HashLink
                to='#stack'
                className='list-item'
                smooth
                onClick={() => setShowDiv(false)}>
                {" "}
                Stack
              </HashLink>
              <HashLink
                to='#projects'
                className='list-item'
                smooth
                onClick={() => setShowDiv(false)}>
                Projects
              </HashLink>
              <HashLink
                to='#contact'
                className='list-item'
                smooth
                onClick={() => setShowDiv(false)}>
                Contact
              </HashLink>
            </ul>
            <button
              id={showDiv ? "div" : ""}
              onClick={() => setShowDiv(!showDiv)}
              className='hamburger-btn'>
              {showDiv ? (
                <CloseIcon style={{ color: "#fff" }} />
              ) : (
                <ReorderIcon />
              )}
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
