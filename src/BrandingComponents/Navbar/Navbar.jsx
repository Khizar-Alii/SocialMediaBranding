import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        {/* <Link to="/" className="nav__logo">
          Navigation Bar
        </Link> */}

        <div
          className={`nav__menu ${!showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {/* <li className="nav__item">
              <Link to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </Link>
            </li> */}
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                The Bold Moves
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/createyourchannel"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Creating Your Own Channel
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/brandRoadMap"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Brand Road Map
              </Link>
            </li>
            {/* <li className="nav__item">
              <Link
                to="/location"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                About us
              </Link>
            </li> */}
            {/* <li className="nav__item">
              <Link to="/get-started" className="nav__link nav__cta">
                Get Started
              </Link>
            </li> */}
          </ul>
        </div>
        <div
          className={`nav__toggle ${showMenu ? "openIcon" : ""}`}
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <IoMenu />
        </div>
        <div
          className={`nav__close ${!showMenu ? "closeIcon" : ""}`}
          id="nav-close"
          onClick={toggleMenu}
        >
          <IoClose />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
