/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Button from '../GlobalComponents/Button';

function DomainInput() {
  return (
    <div className="domainInput" css={styles}>
      <input
        type="text"
        placeholder="Search your domain name here"
      ></input>
      <div>
        <i class="fas fa-chevron-down"></i>
        <span>.com</span>
      </div>
      <Button btnText='SEARCH NOW' />
    </div>
  );
}

const styles = css`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    max-width: 600px;
    input, div, button{
        height: 100%;
    }
    input {
        width: 60%;
        padding: 0 24px;
        border-radius: 50px 0 0 50px;
        border: none;
        outline: none;
    }
    div{
        width: 15%;
        display: flex;
        align-items: center;
        padding: 0 14px 0 0;
        background: #fff;
        i {
            margin: 0 10px 0 0;
            padding: 4px 0 0 0;
        }
    }
    button{
        width: 25%;
        border-radius: 0 50px 50px 0;
    }
`;

export default DomainInput;
