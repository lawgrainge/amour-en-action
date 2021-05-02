import React from "react";

import { Link } from "react-static";

import "./button.css";

const Button = ({
  children,
  type = "primary",
  position,
  style,
  to,
  isDisabled = false,
  isSubmit = false,
}) => {
  let component;
  let buttonProps = {
    className: "button",
    style: style,
  };

  if (type) buttonProps.className += ` button--${type}`;
  if (position) buttonProps.className += ` button--${position}`;
  if (isDisabled) buttonProps.className += " button--disabled";

  if (to) {
    buttonProps.to = to;
    component = <Link {...buttonProps}>{children}</Link>;
  } else {
    component = (
      <button
        type={isSubmit ? "submit" : "button"}
        disabled={isDisabled}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }

  return component;
};

export default Button;
