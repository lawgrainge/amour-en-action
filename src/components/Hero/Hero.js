import React from "react";

import "./hero.css";

export const Hero = ({ heading, subheading, image = "", large }) => (
  <div className={`hero ${large ? "hero--large" : ""}`}>
    <div className="hero-image-wrapper">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
    <div className="hero-text">
      {heading && <h1 className="hero__heading">{heading}</h1>}
      {subheading && <p className="hero__sub-heading">{subheading}</p>}
    </div>
  </div>
);

export default Hero;
