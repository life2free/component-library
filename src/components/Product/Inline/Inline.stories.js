import React from "react";
import { storiesOf } from "@storybook/react";
import Inline from "./Inline";

const product = {
  name: "mac",
  title: "Beats Solo2 On Ear Headphones - Black",
  rate: 4,
  reviews: 0,
  sale: "$499",
  original: "$599",
  description:
    "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...",
};

storiesOf("Product / Inline", module).add("Mac", () => (
  <Inline
    name={product.name}
    title={product.title}
    rate={product.rate}
    reviews={product.reviews}
    sale={product.sale}
    original={product.original}
    description={product.description}
  />
));
