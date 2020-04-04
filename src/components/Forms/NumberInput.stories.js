import React from "react";
import { storiesOf } from "@storybook/react";
import NumberInput from "./NumberInput";

const selectList = ["Audi", "BMW", "Honda"];
storiesOf("Form / NumberInput", module).add("NumberInput", () => (
  <NumberInput min="1" max="10" value="3" step="2" />
));
