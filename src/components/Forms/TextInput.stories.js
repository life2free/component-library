import React from "react";
import { storiesOf } from "@storybook/react";
import TextInput from "./TextInput";

storiesOf("Form / TextInput", module)
  .add("TextInput small", () => (
    <TextInput label="Email" placeholder="Email" size="small" />
  ))
  .add("TextInput", () => <TextInput label="Email" placeholder="Email" />)
  .add("TextInput large", () => (
    <TextInput label="Email" placeholder="Email" size="large" />
  ));
