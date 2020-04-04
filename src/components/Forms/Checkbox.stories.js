import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";

storiesOf("Form / Checkbox", module)
  .add("Checkbox", () => <Checkbox />)
  .add("Checkbox Checked", () => <Checkbox checked />)
  .add("Checkbox Primary", () => <Checkbox type="primary" />)
  .add("Checkbox Primary Checked", () => <Checkbox type="primary" checked />)
  .add("Checkbox Label Checked", () => (
    <Checkbox label="Don't show this popup again" checked />
  ));
