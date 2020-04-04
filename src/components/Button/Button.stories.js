import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

const onClickTest = () => alert("test button click eventlisterner");

storiesOf("Button / Primary", module)
  .add("Primary", () => (
    <Button label="Do something" type="primary" onClick={onClickTest} />
  ))
  .add("Primary Outline", () => (
    <Button label="Do something" type="primary" outline />
  ))
  .add("Primary Faded", () => (
    <Button label="Do something" type="primary" faded />
  ))
  .add("Primary Large", () => (
    <Button label="Do something" type="primary" size="large" />
  ))
  .add("Primary Large Outline", () => (
    <Button label="Do something" type="primary" outline size="large" />
  ))
  .add("Primary Large Faded", () => (
    <Button label="Do something" type="primary" faded size="large" />
  ));

storiesOf("Button / Danger", module)
  .add("Danger", () => <Button label="Do something" type="danger" />)
  .add("Danger Outline", () => (
    <Button label="Do something" type="danger" outline />
  ))
  .add("Danger Faded", () => (
    <Button label="Do something" type="danger" faded />
  ))
  .add("Danger Large", () => (
    <Button label="Do something" type="danger" size="large" />
  ))
  .add("Danger Large Outline", () => (
    <Button label="Do something" type="danger" outline size="large" />
  ))
  .add("Danger Large Faded", () => (
    <Button label="Do something" type="danger" faded size="large" />
  ));

storiesOf("Button / Success", module)
  .add("Success", () => <Button label="Do something" type="success" />)
  .add("Success Outline", () => (
    <Button label="Do something" type="success" outline />
  ))
  .add("Success Faded", () => (
    <Button label="Do something" type="success" faded />
  ))
  .add("Success Large", () => (
    <Button label="Do something" type="success" size="large" />
  ))
  .add("Success Large Outline", () => (
    <Button label="Do something" type="success" outline size="large" />
  ))
  .add("Success Large Faded", () => (
    <Button label="Do something" type="success" faded size="large" />
  ));

storiesOf("Button / Warning", module)
  .add("Warning", () => <Button label="Do something" type="warning" />)
  .add("Warning Outline", () => (
    <Button label="Do something" type="warning" outline />
  ))
  .add("Warning Faded", () => (
    <Button label="Do something" type="warning" faded />
  ))
  .add("Warning Large", () => (
    <Button label="Do something" type="warning" size="large" />
  ))
  .add("Warning Large Outline", () => (
    <Button label="Do something" type="warning" outline size="large" />
  ))
  .add("Warning Large Faded", () => (
    <Button label="Do something" type="warning" faded size="large" />
  ));

storiesOf("Button / Default", module)
  .add("Default", () => <Button label="Do something" />)
  .add("Default Outline", () => <Button label="Do something" outline />)
  .add("Default Faded", () => <Button label="Do something" faded />)
  .add("Default Large", () => <Button label="Do something" size="large" />)
  .add("Default Large Outline", () => (
    <Button label="Do something" outline size="large" />
  ))
  .add("Default Large Faded", () => (
    <Button label="Do something" faded size="large" />
  ));

storiesOf("Button / Button with icon", module)
  .add("Heart Button with Text", () => (
    <Button label="Add to Cart" type="primary" faded icon="cart" size="small" />
  ))
  .add("Carts Button with Text", () => (
    <Button
      label="Add to Favorites"
      type="primary"
      faded
      icon="hearts"
      size="small"
    />
  ))
  .add("Heart Button", () => (
    <Button type="primary" shape="square" faded icon="hearts" />
  ))
  .add("Carts Button", () => (
    <Button type="primary" shape="square" faded icon="cart" />
  ));
