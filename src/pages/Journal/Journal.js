import React from 'react';

import Section, { SectionPanel, SectionImage, SlantedPanel } from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';

import './journal.css';


const Journal = () => (
    <div className="journal">
        <Hero heading="Journal" />
        <Section theme="light-grain">
            <SectionPanel padded>
                <h2>Taking A Journey</h2>
                <p>
                    We are on a journey to bring transformation and change to the people of 
                    Haiti in the name of Jesus Christ. Here are our stories of the unfolding
                    of that journey.
                </p>
            </SectionPanel>
        </Section>
    </div>
);

export default Journal;
