import React, { useState } from "react";
import "../assets/css/nav.css";
import imgLogo from "../assets/img/imgLogo-Deive.png";

function Navbar() {
  const [active, setActive] = useState("navMenu");
  const [toggleIcon, setToggleIcon] = useState("navToggler");

  const navToggle = () => {
    active === "navMenu"
      ? setActive("navMenu navActive")
      : setActive("navMenu");

  //Toggler icon
    toggleIcon === "navToggler"
      ? setToggleIcon("navToggler toggle")
      : setToggleIcon("navToggler");
  };

  return (
    <nav className="nav">
      <img className="imgLogo" src={imgLogo} alt="Associação Evangelística"  />
      <ul className={active}>
        <li className="navItem">
          <a href="#" className="navLink">
            Home
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="navLink">
            Doações
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="navLink">
            Transparência
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="navLink">
            Notícias
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
