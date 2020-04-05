import React, { Component } from "react";
import "./TextInputWithButton.css";
import TextInput from "./../TextInput/TextInput";
import Button from "./../../Button/Button";

class TextInputWithButton extends Component {
  constructor(props) {
    super(props);

    let classList = "textinputwithbtn";

    if (this.props.size !== undefined && this.props.size.trim() !== "") {
      let size = this.props.size.trim().toLowerCase();
      classList += ` textinputwithbtn-${size}`;
    }

    this.state = {
      classList: classList,
      value: "",
    };
  }

  inputChangeHandle = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className={this.state.classList}>
        <TextInput
          placeholder={this.props.placeholder}
          size={this.props.size}
          value={this.state.value}
          onChange={this.inputChangeHandle}
        />
        <Button
          label={this.props.label}
          type="primary"
          size={this.props.size}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

export default TextInputWithButton;
