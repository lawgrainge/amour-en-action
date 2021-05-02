import React, { useEffect } from "react";

import { RouteData } from "react-static";

import Section, { SectionPanel } from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import Hero from "../../components/Hero/Hero";

import "./contact.css";

class Contact extends React.Component {
  state = {};

  handleChange = (e) => {
    const target = e.target || {};
    const { value, name } = target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    const {
      pageData: { heading, heroImageLg },
    } = this.props;
    const { firstName, lastName, email, message } = this.state;

    const isConfirmation = window.location.pathname.includes("thanks");
    const isFormComplete = firstName && lastName && email && message;

    return (
      <div className="contact">
        <Hero heading={heading} image={heroImageLg} />
        <Section theme="light-grain">
          <SectionPanel padded>
            {isConfirmation ? (
              <React.Fragment>
                <h2>Thank you!</h2>
                <p>We will get back to you as soon as we can.</p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h2>We Want To Hear From You</h2>
                <p>
                  You can call us directly at <strong>609-707-4561</strong> or
                  fill out the form below. We promise to get back to you as soon
                  as possible.
                </p>
              </React.Fragment>
            )}
          </SectionPanel>
        </Section>
        {!isConfirmation && (
          <Section theme="medium-gray">
            <form
              className="contact-form"
              target="_blank"
              action="https://formsubmit.co/lawgrainge@yahoo.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Amour En Action Inquiry!"
              ></input>
              <input
                type="hidden"
                name="_next"
                value="https://amourenaction.netlify.app/contact/thanks"
              ></input>

              <input
                name="firstName"
                placeholder="first name"
                onChange={this.handleChange}
              ></input>
              <input
                name="lastName"
                placeholder="last name"
                onChange={this.handleChange}
              ></input>
              <input
                name="email"
                placeholder="email"
                onChange={this.handleChange}
              ></input>
              <textarea
                name="message"
                placeholder="message"
                onChange={this.handleChange}
              ></textarea>

              <Button isSubmit isDisabled={!isFormComplete}>
                Submit
              </Button>
            </form>
          </Section>
        )}
      </div>
    );
  }
}

export default () => <RouteData component={Contact} />;
