import React from 'react';

import { Link } from 'react-static';

import './mobile-menu.css';


const MobileMenu = ({ isOpen, links = [], closeMenu }) => (
    <div className={ `mobile-menu ${ isOpen ? 'mobile-menu--open' : '' }` }>
        <button className="mobile-menu__close" type="button" onClick={ closeMenu }>
            Close
        </button>
        <ul className="mobile-menu__list">
            { links.map(( { label, to, ...attrs }, idx ) => (
                <li key={ `mml-${ idx }` } className="mobile-menu__list-item">
                    <Link className="mobile-menu__link" to={ to } { ...attrs }>{ label }</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default MobileMenu;
