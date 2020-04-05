import React from "react";
import { storiesOf } from "@storybook/react";
import TextInputWithButton from "./TextInputWithButton";

storiesOf("Form / TextInputWithButton", module)
  .add("TextInputWithButton", () => (
    <TextInputWithButton label="Redeem" placeholder="Vouchar code" />
  ))
  .add("TextInputWithButton large", () => (
    <TextInputWithButton
      label="Redeem"
      placeholder="Vouchar code"
      size="large"
    />
  ));
