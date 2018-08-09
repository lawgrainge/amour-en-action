import React from 'react';

import { Link } from 'react-static';

import './footer.css';


const Footer = () => (
    <footer className="footer">
        <nav className="footer__links">
            <Link className="footer__link" exact to="/">Home</Link>
            <Link className="footer__link" to="/about">About Us</Link>
            <Link className="footer__link" to="/journal">Journal</Link>
            <Link className="footer__link" to="/testimonials">Testimonials</Link>
            <Link className="footer__link" to="/get-involved">Get Involved</Link>
            <Link className="footer__link" to="/contact">Contact</Link>
        </nav>
        <span>&copy; Amour En Action 2018</span>
    </footer>
);

export default Footer;
