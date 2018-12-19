import React from 'react';

import { RouteData } from 'react-static';

import Section, { SectionPanel, SectionImage, SlantedPanel } from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';

import './contact.css';


const Contact = ({ pageData: { heading, heroImageLg }}) => (
    <div className="contact">
        <Hero heading={ heading } image={ heroImageLg } />
        <Section theme="light-grain">
            <SectionPanel padded>
                <h2>We Want To Hear From You</h2>
                <p>
                    You can call us directly at <strong>609-707-4561</strong> or fill out the 
                    form below. We promise to get back to you as soon as possible.
                </p>
            </SectionPanel>
        </Section>
    </div>
);

export default () => <RouteData component={ Contact } />;
