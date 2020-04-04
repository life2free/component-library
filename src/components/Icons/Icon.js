import React from "react";
import "./Icon.css";
import cart from "./cart.svg";
import hearts from "./hearts.svg";
import checkmark from "./checkmark.svg";

const icons = ["cart", "hearts", "checkmark"];
const iconObjs = [cart, hearts, checkmark];
const Icon = (props) => {
  if (props.icon !== undefined && props.icon.trim() !== "") {
    let icon = props.icon.trim();
    let idx = icons.indexOf(icon);
    if (idx !== -1) {
      return <img src={iconObjs[idx]} alt={icon}></img>;
    }
  }
  return "";
};

export default Icon;
