import React from 'react';

import './section.css';

const Section = ({ children, theme, padded = false }) => (
    <section className={ `section ${ theme ? `section--${ theme }` : '' } ${ padded ? 'section--padded' : '' }` }>
        { children }
    </section>
);

export const SectionPanel = ({ children, right, padded = false }) => (
    <div className={ `section__panel ${ right ? `section__panel--right` : '' } ${ padded ? 'section--padded' : '' }` }>
        { children }
    </div>
);

export default Section;