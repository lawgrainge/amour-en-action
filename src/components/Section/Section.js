import React from "react";

import "./section.css";

const Section = ({ className, children, theme }) => (
  <section className={`section ${className} ${theme ? `section--${theme}` : ""}`}>
    {children}
  </section>
);

export const SectionImage = ({ src }) => (
  <div
    className="section__image"
    style={{ backgroundImage: `url(${src})` }}
  ></div>
);

export const SectionPanel = ({ children, right, slanted = false, width }) => {
  let classNames = "section__panel";

  if (right) classNames += " section__panel--right";
  if (slanted) classNames += " section__panel--slanted";

  return (
    <div className="section__content" style={{ width: width || null }}>
      <div className={classNames}>{children}</div>
    </div>
  );
};

export const SlantedPanel = ({
  className = "",
  direction = "left",
  children,
}) => (
  <div className={`slanted-panel slanted-panel--${direction} ${className}`}>
    <div className="section__content">{children}</div>
  </div>
);

export default Section;
