import React from 'react';

import './testimony.css';


const Testimony = ({ testimony, name, location }) => (
    <div className="testimony">
        <blockquote className="testimony__quote">
            { testimony }
        </blockquote>
        <span className="testimony__name">{ name }</span>
        <span className="testimony__location">{ location }</span>
    </div>
);

export default Testimony;
