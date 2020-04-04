import React, { Component } from "react";
import "./Checkbox.css";
import Icon from "./../../Icons/Icon";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    let classList = "checkbox-container";

    const checkboxTypes = ["primary", "danger", "success", "warning"];

    let checkboxType = this.props.type;

    if (checkboxType === undefined || checkboxType.trim() === "") {
      checkboxType = `checkbox-default`;
    } else {
      if (checkboxTypes.includes(checkboxType.trim())) {
        let type = checkboxType.trim().toLowerCase();
        checkboxType = `checkbox-${type}`;
      } else {
        checkboxType = `checkbox-default`;
      }
    }

    classList += ` ${checkboxType}`;

    if (this.props.checked) {
      classList += ` checkbox-checked`;
    } else {
      classList += ` checkbox-unchecked`;
    }

    let label = "";
    if (props.label !== undefined && props.label.trim !== "") {
      label = props.label;
    }

    this.state = {
      classList: classList,
      label: label,
    };
  }

  checkStateChange = (e) => {
    let classList = this.state.classList;
    if (classList.indexOf("checkbox-checked") !== -1) {
      classList = classList.replace("checkbox-checked", "checkbox-unchecked");
    } else {
      classList = classList.replace("checkbox-unchecked", "checkbox-checked");
    }
    this.setState({ classList: classList });
  };

  render() {
    return (
      <div className="checkbox-main-container">
        <div className={this.state.classList}>
          <input type="checkbox" onChange={this.checkStateChange} />
          <Icon icon="checkmark" />
        </div>
        <label className="checkbox-label">{this.state.label}</label>
      </div>
    );
  }
}

export default Checkbox;
