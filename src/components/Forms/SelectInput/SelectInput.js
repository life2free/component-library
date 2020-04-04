import React from "react";
import "./SelectInput.css";

const SelectInput = (props) => {
  let classList = "selectinput";

  if (props.outline) {
    classList += ` selectinput-outline`;
  }

  if (props.faded) {
    classList += ` selectinput-faded`;
  }

  if (props.size !== undefined && props.size.trim() !== "") {
    let size = props.size.trim().toLowerCase();
    classList += ` selectinput-${size}`;
  }

  let selectList = props.selectList;

  let selectItems = [];
  if (selectList !== undefined && selectList.length > 0) {
    selectItems = selectList.map((selectItem, index) => (
      <option value={parseInt(index) + 1} key={index}>
        {selectItem}
      </option>
    ));
  }

  return (
    <select className={classList}>
      <option value="0">Select</option>
      {selectItems}
    </select>
  );
};

export default SelectInput;
