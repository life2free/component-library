import React from "react";
import "./Icon.css";
import cart from "./cart.svg";
import hearts from "./hearts.svg";

const icons = ["cart", "hearts"];
const iconObjs = [cart, hearts];
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
