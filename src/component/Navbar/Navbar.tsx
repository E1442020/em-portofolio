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
            <h2>My Portofolio</h2>
          </div>

          <div className="menu-icon" onClick={() => clickHandeler()}>
            {click ? <GoX size={30} /> : <GoThreeBars size={30} />}{" "}
          </div>
        </div>

        <ul className={click ? "show" : ""}>
          <li onClick={() => clickHandeler()} ><a href="#">Home</a></li>
          <li onClick={() => clickHandeler()}><a href="#about">About</a></li>
          <li onClick={() => clickHandeler()}>Skills</li>
          <li onClick={() => clickHandeler()}>Qualifications</li>
          <li onClick={() => clickHandeler()}>Portofolio</li>
          <li onClick={() => clickHandeler()}>Contact</li>
        </ul>
      </div>
    </div>
  );
}
