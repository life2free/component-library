import React, { Component } from "react";
import "./NumberInput.css";

class NumberInput extends Component {
  constructor(props) {
    super(props);

    let min = this.props.min;
    let max = this.props.max;

    let step = this.props.step;
    if (step === undefined || step.trim() === "") {
      step = 1;
    }

    let value = this.props.value;
    if (value === undefined || value.trim() === "") {
      value = min;
    }
    this.state = {
      min: min,
      max: max,
      step: step,
      value: value,
    };
  }

  decreaseHandle = (e) => {
    e.preventDefault();
    let value = this.state.value;
    if (value !== undefined && value !== "") {
      value = parseInt(value);
      let min = parseInt(this.state.min);
      if (value > min) {
        let step = parseInt(this.state.step);
        value -= step;
        if (value < min) value = min;
        this.setState({ value: value });
      }
    }
  };

  increaseHandle = (e) => {
    e.preventDefault();
    let value = this.state.value;
    if (value !== undefined && value !== "") {
      value = parseInt(value);
      let max = parseInt(this.state.max);
      if (value < max) {
        let step = parseInt(this.state.step);
        value += step;
        if (value > max) value = max;
        this.setState({ value: value });
      }
    }
  };

  render() {
    return (
      <div className="numberinput">
        <span className="numberinput-action" onClick={this.decreaseHandle}>
          -
        </span>
        <span>{this.state.value}</span>
        <span className="numberinput-action" onClick={this.increaseHandle}>
          +
        </span>
      </div>
    );
  }
}

export default NumberInput;
