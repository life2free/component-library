import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

storiesOf("Icons", module)
  .add("Hearts", () => <Icon icon="hearts" />)
  .add("Carts", () => <Icon icon="cart" />);
