import React from 'react';

import { Link } from 'react-static';

import './header.css';


const Header = () => (
    <header>
        <nav>
            <Link exact to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/journal">Journal</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/get-involved">Get Involved</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </header>
);

export default Header;
