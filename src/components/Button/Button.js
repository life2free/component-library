import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  let classList = "";

  let types = ["primary", "danger", "success", "warning"];

  let buttonType = "";

  if (props.type === undefined || props.type === "") {
    buttonType = ` button-default`;
  } else {
    if (types.includes(props.type)) {
      buttonType = ` button-${props.type}`;
    } else {
      buttonType = ` button-default`;
    }
  }

  if (props.transparent !== undefined && props.transparent !== "") {
    classList += ` ${buttonType}-${props.transparent.toLowerCase()}transparent`;
  } else {
    classList += ` ${buttonType}`;
  }

  if (props.large) {
    classList += ` button-large`;
  }

  return <button className={classList}>{props.label}</button>;
};

export default Button;
