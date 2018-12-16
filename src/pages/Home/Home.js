import React from 'react';
import { RouteData, Link } from 'react-static';

import Section, { SectionPanel, SectionImage, SlantedPanel } from '../../components/Section/Section';
import Hero from '../../components/Hero/Hero';
import Button from '../../components/Button/Button';

import dev from '../../../public/uploads/developer.jpg';
import './home.css';


const Home = ({ pageData: { heading, subheading }}) => (
    <div className="home">
        <Hero heading={ heading } subheading={ subheading } large />
        <Section theme="light-grain">
            <SectionPanel padded>
                <h3 className="home__intro-heading">So We Began</h3>
                <p className="home__intro">
                    Amour En Action is a non-profit established in 1997 and is incorporated 
                    as a 501(c)(3) charitable organization. We are a Christian Organization dedicated 
                    to providing humanitarian and educational services to the needy citizens 
                    of Haiti. Our mission is to improve their living conditions while creating 
                    hope for a brighter future.
                </p>
            </SectionPanel>
            <HeartImage src={ dev } pos={{ x: 0, y: 0 }} />
        </Section>
        <Section>
            <SectionImage src={ dev } />
            <SlantedPanel>
                <div className="amour-section">
                    <h3>Love In Action</h3>
                    <ul>
                        <li>Building Parks</li>
                        <li>Rebuilding Schools</li>
                        <li>Rebuild Orphanages</li>
                        <li>Providing Clean Water</li>
                        <li>Building Clinics & Hospitals</li>
                    </ul>

                    <Button to="/about" style={{ marginLeft: 10 }}>
                        About us
                    </Button>
                    
                </div>
            </SlantedPanel>
        </Section>
        <Section theme="light-grain">
            <SectionPanel padded>
                <h3>Your Support Is Needed</h3>
                <p>
                    Your support would assist in providing proper health care, education and humanitarian 
                    aid to the needy. Please don't delay. If you feel the need on your heart to give, 
                    please do so. Remember that no amount is too small. Thank you for your contribution 
                    and for partnering with us.
                    <br/>
                    <span className="highlighted">*All contributions are tax-deductible.</span>
                </p>
                <Button to="/take-action" position="center">
                    Make a Donation
                </Button>
            </SectionPanel>
        </Section>
    </div>
);


export const HeartImage = ({ src, pos = {}, size = {} }) => (
    <div className="heart-image">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            viewBox={ `0 0 ${ size.width || 510 } ${ size.height || 510 }` }>
            
            <defs>
                <clipPath id="a">
                    <path d="M255 489.6l-35.7-35.7C86.7 336.6 0 257.55 0 160.65 0 81.6 61.2 20.4 140.25 20.4c43.35 0 86.7 20.4 114.75 53.55C283.05 40.8 326.4 20.4 369.75 20.4 448.8 20.4 510 81.6 510 160.65c0 96.9-86.7 175.95-219.3 293.25L255 489.6z" fill="#D80027"/>
                </clipPath>
            </defs>
            <image
                height="100%"
                x={ pos.x || 0 }
                y={ pos.y || 0 }
                xlinkHref={ src }
                preserveAspectRatio="xMinYMid meet"
                clipPath="url(#a)"
            />
        </svg>
    </div>
);

export default () => <RouteData component={ Home } />;
