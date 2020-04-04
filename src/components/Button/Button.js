import React from "react";
import "./Button.css";
import Icon from "./../Icons/Icon";

const Button = (props) => {
  let classList = "";

  const types = ["primary", "danger", "success", "warning"];

  let buttonType = "";

  if (props.type === undefined || props.type.trim() === "") {
    buttonType = `button-default`;
  } else {
    if (types.includes(props.type.trim())) {
      let type = props.type.trim().toLowerCase();
      buttonType = `button-${type}`;
    } else {
      buttonType = `button-default`;
    }
  }

  classList += ` ${buttonType}`;

  if (props.outline) {
    classList += " button-outline";
  }

  if (props.faded) {
    classList += " button-faded";
  }

  if (props.size !== undefined && props.size.trim() !== "") {
    let size = props.size.trim().toLowerCase();
    classList += ` button-${size}`;
  }

  if (props.shape !== undefined && props.shape.trim() !== "") {
    let shape = props.shape.trim().toLowerCase();
    classList += ` button-${shape}`;
  }

  let icon = "";
  if (props.icon !== undefined && props.icon.trim() !== "") {
    classList += ` flex-button`;
    icon = props.icon.trim().toLowerCase();
  }

  let label = props.label;
  let labelHtml = "";
  if (label !== undefined && label.trim() !== "") {
    labelHtml = <span>{label}</span>;
  }

  return (
    <button className={classList} onClick={props.onClick}>
      <Icon icon={icon} />
      {labelHtml}
    </button>
  );
};

export default Button;
