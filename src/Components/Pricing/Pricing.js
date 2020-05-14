/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Container from "../../Components/GlobalComponents/Container";
import Title from "../../Components/GlobalComponents/Title";
import PricingCard from "./PricingCard";
import Button from "../GlobalComponents/Button";

function Pricing() {
  return (
    <section className="pricing" css={styles}>
      <Container>
        <PricingCard />
        <div className="pricingDesc">
          <Title subtitle="Our Best Services" title="Our Pricing" />
          <p className="info">
            Cnsectetur adipisicing cvbelit, sxced dbeo eiucdsmod tempor
            incididunt ut labore egsfgt dolore magna aliqua. Ut encim ad minim
            veniam, quis nostrud exercitation ulclamco laboris nisi ufgut
            aliquip edgx ebrha.
          </p>
          <div className="btnContainer">
            <Button btnText="MONTHLY" />
            <Button btnText="YEARLY" />
          </div>
        </div>
      </Container>
    </section>
  );
}

const styles = css`
  width: 100%;
  padding: 120px 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .pricingDesc {
      width: 100%;
      max-width: 640px;
      .title {
        h2 {
          padding: 30px 0;
          font-weight: bold;
        }
      }
      .info {
        font-size: 15px;
        color: #10285d;
        line-height: 1.8;
      }
    }
    .btnContainer {
      display: flex;
      padding: 50px 0 0 0;
      button {
        padding: 17px 4px;
        width: 140px;
        &:first-of-type {
          border-radius: 50px 0 0 50px;
        }
        &:last-of-type {
          border-radius: 0 50px 50px 0;
          color: #020230;
          background: #fce0d8;
        }
      }
    }
  }
`;

export default Pricing;
