/** @format */

import React from "react";

import "../styles/header.css";

import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <div className='header-container'>
      <header className='nav-container'>
        <HashLink to='#home' className='logo' smooth>
          Haim Y.
        </HashLink>
        {/* <p className='logo'>Haim Yeshurun</p> */}
        <nav>
          <ul className='list'>
            <HashLink to='#stack' className='list-item' smooth>
              {" "}
              Stack
            </HashLink>
            <HashLink to='#projects' className='list-item' smooth>
              {" "}
              Projects
            </HashLink>
            <HashLink to='#contact' className='list-item' smooth>
              {" "}
              Contact
            </HashLink>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
