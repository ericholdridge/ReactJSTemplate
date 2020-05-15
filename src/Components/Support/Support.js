/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Container from "../../Components/GlobalComponents/Container";
import Title from "../../Components/GlobalComponents/Title";
import SupportBg from "../../images/supportBg.jpg";
import SupportContact from "./SupportContact";

function Support() {
  return (
    <section className="support" css={styles} 
    style={{background: `url(${SupportBg}) no-repeat center/cover`}}>
      <Container>
        <div className="box1">
          <Title subtitle="Get your domain" title="24/7 Expert Support" />
          <p>
            Our expert team is always on hand to help answer your questions, get
            you started, and grow your presence online.You can call, chat or
            email us any time !
          </p>
        </div>
        <div className="box2">
          <SupportContact
            supportIcon="fas fa-phone-volume"
            supportText="+1 514 648"
          />
          <SupportContact supportIcon="fas fa-comments" supportText="Text us" />
        </div>
      </Container>
    </section>
  );
}

const styles = css`
  width: 100%;
  .container {
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
    .box1 {
      width: 100%;
      max-width: 500px;
      p {
        color: #fff;
        line-height: 2;
      }
      .title {
        h2 {
          color: #fff;
          padding: 20px 0;
        }
      }
    }
    .box2 {
      width: 100%;
      max-width: 420px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Support;
