import React from "react";
import { storiesOf } from "@storybook/react";
import TextInputWithButton from "./TextInputWithButton";

const action = (e) => {
  alert("test TextInputWithButton is work");
};

storiesOf("Form / TextInputWithButton", module)
  .add("TextInputWithButton", () => (
    <TextInputWithButton
      label="Redeem"
      placeholder="Vouchar code"
      action={action}
    />
  ))
  .add("TextInputWithButton large", () => (
    <TextInputWithButton
      label="Redeem"
      placeholder="Vouchar code"
      size="large"
      onClick={action}
    />
  ));
