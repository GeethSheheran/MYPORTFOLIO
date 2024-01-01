// Navbar.js
import PropTypes from "prop-types";

import "../App.css";

const Navbar = (props) => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="index.html">
            {props.firstName}
            <span>{props.lastName}</span>
            {/* <p>&lt;geeth <span>sheheran/&gt;</span></p> */}
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#blog">Activities</a>
          </li>
          
          
          <li>
            <a href="#contact" className="navbar-btn">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Navbar;
