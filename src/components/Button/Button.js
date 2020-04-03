import React from "react";
import "./Button.css";
import Icon from "../Icons/Icon";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
  let innerHTML = "";
  let classList = "";

  let types = ["primary", "danger", "success", "warning"];

  let buttonType = "";

  if (props.type === undefined || props.type.trim() === "") {
    buttonType = ` button-default`;
  } else {
    if (types.includes(props.type.trim())) {
      let type = props.type.trim().toLowerCase();
      buttonType = ` button-${type}`;
    } else {
      buttonType = ` button-default`;
    }
  }

  if (props.transparent !== undefined && props.transparent.trim() !== "") {
    let transparent = props.transparent.trim().toLowerCase();
    classList += ` ${buttonType}-${transparent}transparent`;
  } else {
    classList += ` ${buttonType}`;
  }

  if (props.size !== undefined && props.size.trim() !== "") {
    let size = props.size.trim().toLowerCase();
    classList += ` button-${size}`;
  }

  if (props.shape !== undefined && props.shape.trim() !== "") {
    let shape = props.shape.trim().toLowerCase();
    classList += ` button-${shape}`;
  }

  if (props.icon !== undefined && props.icon.trim() != "") {
    classList += " flex-button";
    let icon = props.icon.trim().toLowerCase();
    return (
      <button className={classList}>
        <Icon icon={icon} />
        <span>{props.label}</span>
      </button>
    );
  } else {
    return <button className={classList}>{props.label}</button>;
  }
};

export default Button;
