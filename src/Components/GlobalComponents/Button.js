/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function Button({btnIcon, btnText}) {
  return (
  <button css={button}>
      {btnIcon && <i className={btnIcon}></i>}
      {btnText}
    </button>
  );
}

const button = css`
  background: #eb566c;
  padding: 17px 20px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  margin-left: 100px;
  i {
      margin-right: 10px;
  }
`;

export default Button;
