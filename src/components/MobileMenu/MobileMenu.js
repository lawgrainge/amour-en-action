import React from 'react';

import './mobile-menu.css';


const navigateTo = ( to, history, callback, e ) => {

    e.preventDefault();

    if ( history && to ) {
        history.push( to )
    }
    if ( callback ) callback();
};

const MobileMenu = ({ isOpen, links = [], history, closeMenu }) => (
    <div className={ `mobile-menu ${ isOpen ? 'mobile-menu--open' : '' }` }>
        <button
            className="mobile-menu__close-button"
            type="button"
            onClick={ closeMenu }>
            Close
        </button>

        <ul className="mobile-menu__list">
            { links.map(({ label, to }, idx ) => (
                <li key={ `mml-${ idx }` } className="mobile-menu__list-item">
                    <a
                        className={ `mobile-menu__link ${ history.location.pathname === to ? 'active' : '' }` }
                        href="#"
                        onClick={ e => navigateTo( to, history, closeMenu, e )}>
                        { label }
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default MobileMenu;
