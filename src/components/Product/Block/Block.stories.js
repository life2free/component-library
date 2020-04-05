import React from "react";
import { storiesOf } from "@storybook/react";
import Block from "./Block";

const product = {
  name: "mac",
  title: "Apple Macbook Pro",
  rate: 4,
  sale: "$499",
  original: "$599",
};

storiesOf("Product / Block", module)
  .add("Mac", () => (
    <Block
      name={product.name}
      title={product.title}
      rate={product.rate}
      sale={product.sale}
      original={product.original}
    />
  ))
  .add("Mac Filled", () => (
    <Block
      name={product.name}
      title={product.title}
      rate={product.rate}
      sale={product.sale}
      original={product.original}
      filled
    />
  ))
  .add("Mac Row", () => (
    <Block
      name={product.name}
      title={product.title}
      rate={product.rate}
      sale={product.sale}
      original={product.original}
      row
    />
  ))
  .add("Mac Row Filled", () => (
    <Block
      name={product.name}
      title={product.title}
      rate={product.rate}
      sale={product.sale}
      original={product.original}
      row
      filled
    />
  ))
  .add("Headphones Row", () => (
    <Block
      name="headphones"
      title="Beats Solo 2 On Ear
      Headphones - Black"
      rate="4"
      sale="$499"
      original="$599"
      row
    />
  ));
