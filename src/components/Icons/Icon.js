import React from "react";
import "./Icon.css";
import cart from "./img/cart.svg";
import hearts from "./img/hearts.svg";
import checkmark from "./img/checkmark.svg";
import mac from "./img/mac.svg";

const icons = ["cart", "hearts", "checkmark", "mac"];
const iconObjs = [cart, hearts, checkmark, mac];
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
