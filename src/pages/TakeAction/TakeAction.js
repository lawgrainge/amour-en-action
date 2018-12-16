import React from 'react';

import Section, { SectionPanel, SectionImage, SlantedPanel } from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';

import './take-action.css';


const TakeAction = () => (
    <div className="take-action">
        <Hero heading="Take Action" />
        <Section theme="light-grain">
            <SectionPanel padded>
                <h2>Love Is Also A Verb</h2>
                <p>
                    "Little children, let us not love in word or talk but in deed and in truth."
                    - 1 John 3:18
                </p>
            </SectionPanel>
        </Section>
    </div>
);

export default TakeAction;
