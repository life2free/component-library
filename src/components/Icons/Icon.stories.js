import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

storiesOf("Icons", module)
  .add("Hearts Button", () => <Icon icon="hearts" />)
  .add("Carts Button", () => <Icon icon="cart" />);
