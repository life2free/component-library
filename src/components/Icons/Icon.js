import React from "react";
import "./Icon.css";
import bluecart from "./img/bluecart.svg";
import whitecart from "./img/whitecart.svg";
import bluehearts from "./img/bluehearts.svg";
import whitehearts from "./img/whitehearts.svg";
import checkmark from "./img/checkmark.svg";
import mac from "./img/mac.svg";
import goldstar from "./img/goldstar.svg";
import graystar from "./img/graystar.svg";
import headphones from "./img/headphones.svg";

const icons = [
  "bluecart",
  "whitecart",
  "bluehearts",
  "whitehearts",
  "checkmark",
  "mac",
  "goldstar",
  "graystar",
  "headphones",
];
const iconObjs = [
  bluecart,
  whitecart,
  bluehearts,
  whitehearts,
  checkmark,
  mac,
  goldstar,
  graystar,
  headphones,
];
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
