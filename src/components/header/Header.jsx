import React, { useState } from "react";
import "./header.scss";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [links, setLinks] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 55) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeColor = () => {
    if (window.scrollY >= 55) {
      setLinks(true);
    } else {
      setLinks(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  window.addEventListener("scroll", changeColor);

  return (
    <div>
      <header className={navbar ? "active" : null}>
        <nav className="navbar">
          <a className={navbar ? "a-active" : null} href="#about">
            About
          </a>
          <a className={navbar ? "a-active" : null} href="#projects">
            Projects
          </a>
          <a className={navbar ? "a-active" : null} href="#contacts">
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
