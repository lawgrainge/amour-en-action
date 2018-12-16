import React from 'react';

import { Link } from 'react-static';

import './button.css';


const Button = ({ children, type, position, style, to }) => {

    let component;
    let buttonProps = { 
        className: 'button',
        style: style
    };

    if ( type ) buttonProps.className += ` button--${ type }`;
    if ( position ) buttonProps.className += ` button--${ position }`;

    if ( to ) {
        buttonProps.to = to;
        component = (
            <Link { ...buttonProps }>
                { children }
            </Link>
        );
    } else {
        component = (
            <button type="button" { ...buttonProps }>
                { children }
            </button>
        );
    }

    return (
        component
    );
}

export default Button;
