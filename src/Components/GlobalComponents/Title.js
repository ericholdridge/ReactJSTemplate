/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Title = ({ subtitle, title }) => (
  <div css={styles} className="title">
    <div className="subtitle">
      <span></span>
      <p>{subtitle}</p>
    </div>
    <h2>{title}</h2>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 460px;
  .subtitle {
    display: flex;
    align-items: center;
    span {
      width: 40px;
      margin-right: 20px;
      height: 2px;
      background: #eb566c;
    }
    p{
    color: #eb566c;
      font-weight: bold;
    }
  }
  h2{
    color: #28395a;
    font-size: 40px;
    line-height: 1;
  }
`;

export default Title;
