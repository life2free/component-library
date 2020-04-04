import React from "react";
import { storiesOf } from "@storybook/react";
import SelectInput from "./SelectInput";

const selectList = ["Audi", "BMW", "Honda"];
storiesOf("Form / SelectInput", module)
  .add("SelectInput large", () => (
    <SelectInput selectList={selectList} size="large" />
  ))
  .add("SelectInput", () => <SelectInput selectList={selectList} />)
  .add("SelectInput small", () => (
    <SelectInput selectList={selectList} size="small" />
  ))
  .add("SelectInput large faded", () => (
    <SelectInput selectList={selectList} size="large" faded />
  ))
  .add("SelectInput faded", () => <SelectInput selectList={selectList} faded />)
  .add("SelectInput small faded", () => (
    <SelectInput selectList={selectList} size="small" faded />
  ));
