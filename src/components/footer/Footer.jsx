import "./Footer.scss";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();

  const displayNone = {
    display: "none",
  };

  const display = {
    display: "block",
  };

  return (
    <footer>
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
    </footer>
  );
};

export default Footer;
