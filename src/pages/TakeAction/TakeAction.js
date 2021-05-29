import React from "react";
import { Helmet } from "react-helmet";
import { RouteData } from "react-static";

import Section, { SectionPanel } from "../../components/Section/Section";
import Hero from "../../components/Hero/Hero";

import "./take-action.css";

const TakeAction = ({ pageData: { heading, heroImageLg } }) => (
  <div className="take-action">
    <Helmet>
      <title>Amour En Action | Take Action</title>
    </Helmet>
    <Hero heading={heading} image={heroImageLg} />
    <Section theme="light-grain">
      <SectionPanel padded>
        <h2>Love Is Also A Verb</h2>
        <p>
          "Little children, let us not love in word or talk but in deed and in
          truth." - 1 John 3:18
        </p>
      </SectionPanel>
    </Section>
  </div>
);

export default () => <RouteData component={TakeAction} />;
