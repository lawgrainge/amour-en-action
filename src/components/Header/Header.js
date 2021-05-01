import React from "react";

import { Link } from "react-static";

import "./header.css";

function HeaderLink(props) {
  const { children, ...linkProps } = props;

  return (
    <Link className="header__nav-link" {...linkProps}>
      {children}
    </Link>
  );
}

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
      <HeaderLink exact to="/">
        Home
      </HeaderLink>
      <HeaderLink to="/about">About Us</HeaderLink>
      <HeaderLink to="/journal">Journal</HeaderLink>
      <HeaderLink to="/testimonials">Testimonials</HeaderLink>
      <HeaderLink to="/take-action">Take Action</HeaderLink>
      <HeaderLink to="/contact">Contact</HeaderLink>
    </nav>
  </header>
);

export default Header;
