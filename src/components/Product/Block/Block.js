import React from "react";
import "./Block.css";
import Icon from "./../../Icons/Icon";
import Button from "./../../Button/Button";

const Block = (props) => {
  let classList = "productblock-container";

  let flexDirection = "column";
  if (props.row) {
    flexDirection = "row";
  }
  classList += ` flex-${flexDirection}`;

  let rate = props.rate;
  if (rate === undefined) {
    rate = 0;
  } else {
    rate = parseInt(rate);
  }
  if (rate < 0) rate = 0;
  else if (rate > 5) rate = 5;

  let productRate = [];
  for (let i = 0; i < rate; i++) {
    productRate.push("goldstar");
  }

  for (let i = rate; i < 5; i++) {
    productRate.push("graystar");
  }

  let cart = "bluecart";
  let hearts = "bluehearts";
  if (props.filled) {
    classList += ` filled`;
    cart = "whitecart";
    hearts = "whitehearts";
  }

  return (
    <div className={classList}>
      <div className="productblock-img">
        <Icon icon={props.name} />
        <div className="productblock-action">
          <div className="productblock-action-button">
            <Button type="primary" shape="circle" icon={hearts} />
          </div>
          <div className="productblock-action-button">
            <Button type="primary" shape="circle" icon={cart} />
          </div>
        </div>
      </div>
      <div className="productblock-bar"></div>
      <div className="productblock-info">
        <p className="productblock-title">{props.title}</p>
        <div className="productblock-rate">
          {productRate.map((item, i) => (
            <Icon key={i} icon={item} />
          ))}
        </div>
        <div className="productblock-price">
          <p className="sale">{props.sale}</p>
          <p className="original">{props.original}</p>
        </div>
      </div>
    </div>
  );
};

export default Block;
