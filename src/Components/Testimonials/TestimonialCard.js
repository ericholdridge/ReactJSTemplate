/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import TestimonialUser from "../../images/testimonialUser.png";

const TestimonialCard = () => (
  <div css={styles} className="testimonialCard">
    <div className="userInfo">
      <img src={TestimonialUser} alt="user" />
      <div>
        <h3>Jahon Ann</h3>
        <span>CEO, Colorlib</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
      ultrice.
    </p>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  padding: 20px;
  .userInfo {
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    div {
        margin-left: 20px;
      h3 {
        color: #eb566c;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 10px;
      }
      span{
          color: #57667e;
          font-size: 13px;
          font-weight: 700;
      }
    }
  }
  p{
      color: #10285d;
      font-size: 15px;
      line-height: 1.8;
  }
`;

export default TestimonialCard;
