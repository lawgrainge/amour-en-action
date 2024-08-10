import React from "react";
import { Helmet } from "react-helmet";
import { RouteData } from "react-static";

import Section, { SectionPanel } from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import Hero from "../../components/Hero/Hero";

import "./take-action.css";

const TakeAction = ({ pageData: { heading, heroImageLg } }) => {
  return (
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
      <Section theme="white">
        <SectionPanel padded width="100%">
          <p>
            Please consider taking action by praying for us or by financial
            contributions. All contributions are tax-deductible. If you prefer
            not to use PayPal, please send donations to the following address:{" "}
            <em>22 Elsinore Dr, Hainesport, NJ 08036</em>
          </p>
          <form
            className="donate-form"
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="FHAKBHL4FZDA6"
            />

            <Button isSubmit>Donate</Button>

            <img
              src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppmcvdam.png"
              alt="Buy now with PayPal"
            />

            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </SectionPanel>
      </Section>
    </div>
  );
};

export default () => <RouteData component={TakeAction} />;
