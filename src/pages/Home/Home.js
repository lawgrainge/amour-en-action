import React from 'react';
import { RouteData } from 'react-static';

import Section, { SectionPanel } from '../../components/Section/Section';

import './home.css';


const Home = ({ pageData: { heading, subheading }}) => (
    <div className="home">
        <div className="hero">
            <h1>{ heading }</h1>
            <p>{ subheading }</p>
        </div>
        <Section theme="light-grain">
            <SectionPanel right padded>
                <p>
                    Amour En Action is a non-profit established in 1997 and is incorporated 
                    as a 501(c)(3) charitable organization Christian Organization dedicated 
                    to providing humanitarian and educational services to the needy citizens 
                    of Haiti. Our mission is to improve their lsiving conditions while creating 
                    hope for a brighter future.
                </p>
            </SectionPanel>
        </Section>
        <Section>
            <SectionPanel padded>
                <p>
                    Come and learn more about us
                </p>
                <button>About us</button>
            </SectionPanel>
        </Section>
        <Section theme="light-grain">
            <SectionPanel padded>
                <p>
                    Your support would assist in providing proper health care, education and humanitarian 
                    aid to the needy. Please don't delay. If you feel the need on your heart to give, 
                    please do so. Remember that no amount is too small. Thank you for your contribution 
                    and for partnering with us.
                    <br/>
                    *All contributions are tax-deductible.
                </p>
                <button>Make a Donation</button>
            </SectionPanel>
        </Section>
    </div>
);

export default () => <RouteData component={ Home } />;
