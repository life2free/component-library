import React from "react";
import "./Inline.css";
import Icon from "./../../Icons/Icon";
import Button from "./../../Button/Button";

const Inline = (props) => {
  let classList = "productinline-container";

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

  if (props.filled) {
    classList += ` filled`;
  }

  return (
    <div className={classList}>
      <div className="productinline-left">
        <div className="productinline-hot">HOT</div>
        <div className="productinline-img">
          <Icon icon={props.name} />
        </div>
      </div>
      <div className="productinline-info">
        <p className="productinline-title">{props.title}</p>
        <div className="productinline-rate-reviews">
          <div className="productinline-rate">
            {productRate.map((item, i) => (
              <Icon key={i} icon={item} />
            ))}
          </div>
          <p className="productinline-reviews-count">{props.reviews} reviews</p>
          <p className="productinline-reviews-submit">Submit a review</p>
        </div>
        <div className="productinline-bar"></div>
        <div className="productinline-price">
          <p className="sale">{props.sale}</p>
          <p className="original">{props.original}</p>
        </div>
        <p className="productinline-description">{props.description}</p>
        <div className="productinline-action">
          <Button
            label="Add to Cart"
            type="primary"
            faded
            icon="bluecart"
            size="small"
          />
          <Button type="primary" shape="square" faded icon="bluehearts" />
        </div>
      </div>
    </div>
  );
};

export default Inline;
