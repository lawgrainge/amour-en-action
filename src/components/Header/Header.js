import React from "react";

import { Link } from "react-static";

import "./header.css";

const Header = ({ toggleMenu }) => (
  <header className="header">
    <button className="header__menu-button" type="button" onClick={toggleMenu}>
      &#9776; Menu
    </button>
    <span className="header__line"></span>
    <div className="header__logo">
      <img src="/images/aea_logo.svg" />
    </div>
    <nav className="header__nav">
      <Link className="header__nav-link" exact to="/">
        Home
      </Link>
      <Link className="header__nav-link" to="/about">
        About Us
      </Link>
      <Link className="header__nav-link" to="/journal">
        Journal
      </Link>
      <Link className="header__nav-link" to="/testimonials">
        Testimonials
      </Link>
      <Link className="header__nav-link" to="/take-action">
        Take Action
      </Link>
      <Link className="header__nav-link" to="/contact">
        Contact
      </Link>
    </nav>
  </header>
);

export default Header;
