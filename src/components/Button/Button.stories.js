import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button / Primary", module)
  .add("Primary", () => <Button label="Do something" type="primary" />)
  .add("Primary FullTransparent", () => (
    <Button label="Do something" type="primary" transparent="full" />
  ))
  .add("Primary MoreTransparent", () => (
    <Button label="Do something" type="primary" transparent="more" />
  ))
  .add("Primary Large", () => (
    <Button label="Do something" type="primary" large />
  ))
  .add("Primary FullTransparent Large", () => (
    <Button label="Do something" type="primary" transparent="full" large />
  ))
  .add("Primary MoreTransparent Large", () => (
    <Button label="Do something" type="primary" transparent="more" large />
  ));

storiesOf("Button / Danger", module)
  .add("Danger", () => <Button label="Do something" type="danger" />)
  .add("Danger FullTransparent", () => (
    <Button label="Do something" type="danger" transparent="full" />
  ))
  .add("Danger MoreTransparent", () => (
    <Button label="Do something" type="danger" transparent="more" />
  ))
  .add("Danger Large", () => (
    <Button label="Do something" type="danger" large />
  ))
  .add("Danger FullTransparent Large", () => (
    <Button label="Do something" type="danger" transparent="full" large />
  ))
  .add("Danger MoreTransparent Large", () => (
    <Button label="Do something" type="danger" transparent="more" large />
  ));

storiesOf("Button / Success", module)
  .add("Success", () => <Button label="Do something" type="success" />)
  .add("Success FullTransparent", () => (
    <Button label="Do something" type="success" transparent="full" />
  ))
  .add("Success MoreTransparent", () => (
    <Button label="Do something" type="success" transparent="more" />
  ))
  .add("Success Large", () => (
    <Button label="Do something" type="success" large />
  ))
  .add("Success FullTransparent Large", () => (
    <Button label="Do something" type="success" transparent="full" large />
  ))
  .add("Success MoreTransparent Large", () => (
    <Button label="Do something" type="success" transparent="more" large />
  ));

storiesOf("Button / Warning", module)
  .add("Warning", () => <Button label="Do something" type="warning" />)
  .add("Warning FullTransparent", () => (
    <Button label="Do something" type="warning" transparent="full" />
  ))
  .add("Warning MoreTransparent", () => (
    <Button label="Do something" type="warning" transparent="more" />
  ))
  .add("Warning Large", () => (
    <Button label="Do something" type="warning" large />
  ))
  .add("Warning FullTransparent Large", () => (
    <Button label="Do something" type="warning" transparent="full" large />
  ))
  .add("Warning MoreTransparent Large", () => (
    <Button label="Do something" type="warning" transparent="more" large />
  ));

storiesOf("Button / Default", module)
  .add("Default", () => <Button label="Do something" />)
  .add("Default FullTransparent", () => (
    <Button label="Do something" transparent="full" />
  ))
  .add("Default MoreTransparent", () => (
    <Button label="Do something" transparent="more" />
  ))
  .add("Default Large", () => <Button label="Do something" large />)
  .add("Default FullTransparent Large", () => (
    <Button label="Do something" transparent="full" large />
  ))
  .add("Default MoreTransparent Large", () => (
    <Button label="Do something" transparent="more" large />
  ));
