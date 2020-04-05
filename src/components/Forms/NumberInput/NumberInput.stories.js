import React from "react";
import { storiesOf } from "@storybook/react";
import NumberInput from "./NumberInput";

storiesOf("Form / NumberInput", module).add("NumberInput", () => (
  <NumberInput min="1" max="10" value="1" step="1" />
));
