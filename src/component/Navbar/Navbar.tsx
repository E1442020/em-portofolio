import React from "react";
import { useState } from "react";
import { GoThreeBars, GoX } from "react-icons/go";
import "./NavbarStyle.scss";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const clickHandeler = () => {
    setClick(!click);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo-container">
          <div className="logo-content">
            <h2><a href="#portfolio">My Portfolio</a></h2>
          </div>

          <div className="menu-icon" onClick={() => clickHandeler()}>
            {click ? <GoX size={30} /> : <GoThreeBars size={30} />}{" "}
          </div>
        </div>

        <ul className={click ? "show" : ""}>
          <li onClick={() => clickHandeler()} ><a href="#">Home</a></li>
          <li onClick={() => clickHandeler()}><a href="#about">About</a></li>
          <li onClick={() => clickHandeler()}><a href="#skills">Skills</a></li>
          <li onClick={() => clickHandeler()}><a href="#education">Education</a></li>
          <li onClick={() => clickHandeler()}><a href="#portfolio">Portfolio</a></li>
          <li onClick={() => clickHandeler()}><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
