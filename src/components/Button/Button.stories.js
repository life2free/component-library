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
    <Button label="Do something" type="primary" size="large" />
  ))
  .add("Primary FullTransparent Large", () => (
    <Button
      label="Do something"
      type="primary"
      transparent="full"
      size="large"
    />
  ))
  .add("Primary MoreTransparent Large", () => (
    <Button
      label="Do something"
      type="primary"
      transparent="more"
      size="large"
    />
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
    <Button label="Do something" type="danger" size="large" />
  ))
  .add("Danger FullTransparent Large", () => (
    <Button
      label="Do something"
      type="danger"
      transparent="full"
      size="large"
    />
  ))
  .add("Danger MoreTransparent Large", () => (
    <Button
      label="Do something"
      type="danger"
      transparent="more"
      size="large"
    />
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
    <Button label="Do something" type="success" size="large" />
  ))
  .add("Success FullTransparent Large", () => (
    <Button
      label="Do something"
      type="success"
      transparent="full"
      size="large"
    />
  ))
  .add("Success MoreTransparent Large", () => (
    <Button
      label="Do something"
      type="success"
      transparent="more"
      size="large"
    />
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
    <Button label="Do something" type="warning" size="large" />
  ))
  .add("Warning FullTransparent Large", () => (
    <Button
      label="Do something"
      type="warning"
      transparent="full"
      size="large"
    />
  ))
  .add("Warning MoreTransparent Large", () => (
    <Button
      label="Do something"
      type="warning"
      transparent="more"
      size="large"
    />
  ));

storiesOf("Button / Default", module)
  .add("Default", () => <Button label="Do something" />)
  .add("Default FullTransparent", () => (
    <Button label="Do something" transparent="full" />
  ))
  .add("Default MoreTransparent", () => (
    <Button label="Do something" transparent="more" />
  ))
  .add("Default Large", () => <Button label="Do something" size="large" />)
  .add("Default FullTransparent Large", () => (
    <Button label="Do something" transparent="full" size="large" />
  ))
  .add("Default MoreTransparent Large", () => (
    <Button label="Do something" transparent="more" size="large" />
  ));

storiesOf("Button / Button with icon", module)
  .add("Heart Button with Text", () => (
    <Button
      label="Add to Cart"
      type="primary"
      transparent="more"
      icon="cart"
      size="small"
    />
  ))
  .add("Carts Button with Text", () => (
    <Button
      label="Add to Favorites"
      type="primary"
      transparent="more"
      icon="hearts"
      size="small"
    />
  ))
  .add("Heart Button", () => (
    <Button type="primary" shape="square" transparent="more" icon="hearts" />
  ))
  .add("Carts Button", () => (
    <Button type="primary" shape="square" transparent="more" icon="cart" />
  ));
