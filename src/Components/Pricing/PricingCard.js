/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import RocketImage from "../../images/rocket.png";
import Button from "../GlobalComponents/Button";
import pricingShape1 from "../../images/pricingShape1.png";
import pricingShape2 from "../../images/pricingShape2.png";

function PricingCard() {
  return (
    <div className="pricingCard" css={styles}>
      <div className="images">
        <img src={pricingShape1} alt="" />
        <img src={pricingShape2} alt="" />
      </div>
      <div className="circle">
        <img src={RocketImage} alt="" />
      </div>
      <div className="pricing">
        <span>$ 05.00</span>
      </div>
      <div className="pricingInfo">
        <span>Increase traffic 50%</span>
        <span>Social Media Marketing</span>
        <span>10 Free Optimization</span>
        <span>24/7 support</span>
      </div>
      <Button btnText="GET THE PLAN" />
    </div>
  );
}

const styles = css`
  width: 100%;
  max-width: 340px;
  height: 600px;
  border: 1px solid red;
  background: #ff4f5b;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 40px;
  color: #fff;
  position: relative;
  .images {
    img {
      position: absolute;
      &:first-of-type {
        top: 0;
        right: 0;
      }
      &:last-of-type {
        bottom: 0;
        left: 0;
      }
    }
  }
  .circle {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: #fce0d8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pricing {
    border-bottom: 1px solid #fff;
    width: 75%;
    span {
      font-weight: bold;
      font-size: 26px;
      display: block;
      padding: 30px 0;
    }
  }
  .pricingInfo {
    padding: 10px 0 0 0;
    span {
      display: block;
      padding: 12px 0;
    }
  }
  button {
    margin: 10px 0 0 0;
    background: white;
    padding: 18px 36px;
    color: #000;
    position: relative;
    &:hover{
        color: #fff;
    }
  }
`;

export default PricingCard;
