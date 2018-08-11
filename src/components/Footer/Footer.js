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
            <Link className="footer__link" to="/take-action">Take Action</Link>
            <Link className="footer__link" to="/contact">Contact</Link>
        </nav>
        <p className="footer__copyright">&copy; Amour En Action 2018</p>
    </footer>
);

export default Footer;
