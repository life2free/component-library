import React from "react";
import "./Icon.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Icon = (props) => {
  let className = "";

  if (props.icon !== undefined && props.icon.trim() !== "") {
    className = `icon-${props.icon.trim().toLowerCase()}`;
  }
  return <img className={className}></img>;
};

export default Icon;
