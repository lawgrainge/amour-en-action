import React from 'react';
import { RouteData } from 'react-static';

import './home.css';


const Home = ({ pageData: { heading, subheading }}) => (
    <div className="page page--home">
        <div className="hero">
            <h1>{ heading }</h1>
            <p>{ subheading }</p>
        </div>
    </div>
);

export default () => <RouteData component={ Home } />;
