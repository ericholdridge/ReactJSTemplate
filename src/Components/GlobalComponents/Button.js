/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function Button({btnIcon, btnText}) {
  return (
  <button css={styles}>
      {btnIcon && <i className={btnIcon}></i>}
      {btnText}
    </button>
  );
}

const styles = css`
  background: #eb566c;
  padding: 17px 20px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  transition: background 400ms ease-in-out;
  &:hover{
    background: #f32a48;
  }
  i {
      margin-right: 10px;
  }
`;

export default Button;
