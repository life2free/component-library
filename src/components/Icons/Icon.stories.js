import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

storiesOf("Icons", module)
  .add("Blue Hearts", () => <Icon icon="bluehearts" />)
  .add("Blue Carts", () => <Icon icon="bluecart" />)
  .add("Gold Star", () => <Icon icon="goldstar" />)
  .add("Gray Star", () => <Icon icon="graystar" />);
