import React from 'react';

import './button.css';


const Button = ({ children, type, position, style }) => {

    let classNames = 'button';

    if ( type ) classNames += ` button--${ type }`;
    if ( position ) classNames += ` button--${ position }`;

    return (
        <button type="button" className={ classNames } style={ style }>
            { children }
        </button>
    );
}

export default Button;
