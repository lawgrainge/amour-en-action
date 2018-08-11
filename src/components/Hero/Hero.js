import React from 'react';

import './hero.css';


export const Hero = ({ heading, subheading, image = '', large }) => (
    <div className={ `hero ${ large ? 'hero--large' : '' }` } style={{ backgroundImage: `url(${ image })` }}>
        { heading &&
            <h1 className="hero__heading">
                { heading }
            </h1>
        }
        { subheading &&
            <p className="hero__sub-heading">
                { subheading }
            </p>
        }
    </div>
);

export default Hero;