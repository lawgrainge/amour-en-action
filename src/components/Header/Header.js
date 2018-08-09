import React from 'react';

import { Link } from 'react-static';

import './header.css';


const Header = () => (
    <header className="header">
        <nav className="header__nav">
            <Link className="header__nav-link" exact to="/">Home</Link>
            <Link className="header__nav-link" to="/about">About Us</Link>
            <Link className="header__nav-link" to="/journal">Journal</Link>
            <Link className="header__nav-link" to="/testimonials">Testimonials</Link>
            <Link className="header__nav-link" to="/get-involved">Get Involved</Link>
            <Link className="header__nav-link" to="/contact">Contact</Link>
        </nav>
    </header>
);

export default Header;
