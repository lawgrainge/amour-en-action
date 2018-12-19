import React from 'react';

import { RouteData } from 'react-static';

import Section, { SectionPanel, SectionImage, SlantedPanel } from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';
import Testimony from '../../components/Testimony/Testimony';
import Button from '../../components/Button/Button';

import './testimonials.css';


const Testimonials = ({ pageData: { testimonials, heading, heroImageLg } }) => (
    <div className="testimonials">
        <Hero heading={ heading } image={ heroImageLg } />
        <Section theme="light-grain">
            <SectionPanel padded>
                <h2>What Others Are Saying</h2>
                <p>
                    It's important to hear how we're making a difference. If you would 
                    like to share how Amour En Action has helped you or your community, 
                    please contact us.
                </p>
                <Button to="/contact" position="center">
                    Contact Us
                </Button>
            </SectionPanel>
        </Section>
        <Section theme="white">
            <SectionPanel padded>
                <div className="testimonials-content">
                    { Array.isArray( testimonials ) && testimonials.map(( data, idx ) => (
                        <Testimony
                            key={ `t-${ idx }` }
                            testimony={ data.testimony }
                            name={ data.name }
                            location={ data.location }
                        />
                    ))} 
                </div>
            </SectionPanel>
        </Section>
    </div>
);

export default () => <RouteData component={ Testimonials } />;
