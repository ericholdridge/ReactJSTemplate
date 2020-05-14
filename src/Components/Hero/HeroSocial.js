/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function HeroSocial() {
  return (
    <div css={styles} className="heroSocial">
      <i class="fab fa-instagram fa-sm"></i>
      <i class="fas fa-globe fa-sm"></i>
      <i class="fab fa-twitter fa-sm"></i>
      <i class="fab fa-facebook-f fa-sm"></i>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 30px;
  bottom: 100px;
  i {
    color: #45455f;
    cursor: pointer;
    margin-bottom: 16px;
    transition: color 300ms ease-in-out;
    transform: rotate(-90deg);
    &:hover {
      color: #f32a48;
    }
  }
  .line {
    width: 4px;
    height: 18px;
    cursor: pointer;
    background: #162e78;
    margin-bottom: 10px;
    &:last-of-type {
      height: 30px;
      background: #03a7d2;
    }
  }
`;

export default HeroSocial;
