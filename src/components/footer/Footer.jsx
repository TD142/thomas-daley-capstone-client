import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();

  console.log(location);

  const displayNone = {
    display: "none",
  };

  const display = {
    display: "block",
  };

  return (
    <div>
      <nav className="nav">
        <NavLink
          style={location.pathname === "/" ? displayNone : display}
          onClick={handleClick}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={location.pathname === "/about" ? displayNone : display}
          onClick={handleClick}
          to="about"
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Footer;
