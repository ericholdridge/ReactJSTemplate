/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import DomainRow from "./DomainRow";
import DomainInput from './DomainInput';
import DomainBg from "../../images/domainBg.jpg";

function Domain() {
  return (
    <section className="domain" css={styles}>
        <Container>
            <Title subtitle='Get your domain' title='Search domain you want' />
            <DomainInput />
            <DomainRow />
        </Container>
    </section>
  );
}

const styles = css`
  width: 100%;
  padding: 120px 0;
  background: url('${DomainBg}') no-repeat center/cover;
  .container {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: space-between;
      .title {
        margin: 0;
        max-width: 360px;
        h2{
            color: #fff;
            padding: 40px 0 0 0;
        }
      }
  }
`;

export default Domain;
