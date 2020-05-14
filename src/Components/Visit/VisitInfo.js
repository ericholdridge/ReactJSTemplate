/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Button from "../GlobalComponents/Button";
import VisitBg from "../../images/visitBg.jpg";

const VisitInfo = () => (
  <div css={styles} className="visitInfo">
    <div className="visitDesc">
      <Title
        subtitle="Get your domain"
        title="We are with you every step of the way"
      />
      <div className='info'>
        <p>
            Cnsectetur adipisicing cvbelit, sxced dbeo eiucdsmod tempor incididunt
            ut labore egsfgt dolore magna aliqua. Ut encim ad minim veniam, quis
            nostrud exercitation ulclamco laboris nisi ufgut aliquip edgx ebrha.
        </p>
        <p>
            Cnsectetur adipisicing cvbelit, sxced dbeo eiucdsmod tempor incididunt
            ut labore egsfgt folorem.
        </p>
      </div>
      <Button btnText="GET STARTED" />
    </div>
    <div className="visitBg"></div>
  </div>
);

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .visitDesc {
    width: 100%;
    max-width: 500px;
    .title {
      h2 {
        padding: 26px 0 50px 0;
      }
    }
    .info{
    p {
      font-size: 14px;
      line-height: 2;
      margin-bottom: 14px;
      color: #10285d;
    }
    }
    button {
      margin: 20px 0 0 0;
      padding: 15px 26px;
    }
  }
  .visitBg {
    width: 100%;
    max-width: 500px;
    height: 400px;
    background: url('${VisitBg}') no-repeat center/cover;
  }
`;

export default VisitInfo;
