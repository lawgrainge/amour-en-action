import React from 'react';

import Section, { SectionPanel, SectionImage, SlantedPanel } from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';
import Button from '../../components/Button/Button';

import './testimonials.css';


const Testimonials = () => (
    <div className="testimonials">
        <Hero heading="Testimonials" />
        <Section theme="light-grain">
            <SectionPanel padded>
                <h2>What Others Are Saying</h2>
                <p>
                    It's important to hear how we're making a difference. If you would 
                    also like to share how Amour En Action has helped you or your, 
                    community, please contact us.
                </p>
                <Button to="/contact" position="center">
                    Contact Us
                </Button>
            </SectionPanel>
        </Section>
    </div>
);

export default Testimonials;
