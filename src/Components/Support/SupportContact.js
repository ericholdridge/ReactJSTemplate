/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function SupportContact({supportIcon, supportText}) {
    return (
      <div className="box" css={styles}>
        <div className="circle">
          <i className={supportIcon}></i>
        </div>
        <span>{supportText}</span>
      </div>
    );
}

const styles = css`
  width: 100%;
  max-width: 200px;
  background: #eb566c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  .circle {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: #ff6b81;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
          color: #fff;
      }
  }
    span {
        display: block;
        color: #fff;
        font-weight: bold;
        margin-top: 20px;
    }
`;

export default SupportContact;