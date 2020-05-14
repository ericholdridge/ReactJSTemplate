/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section css={styles} className="services">
      <Title subtitle="Our Best Services" title="What we have for you" />
      <Container>
        <ServiceCard cardNumber='.01' cardTitle="Shared Hosting" cardIcon="fas fa-server fa-4x" />
        <ServiceCard cardNumber='.02' cardTitle="Reseller Hosting" cardIcon="fas fa-globe-europe fa-4x" />
        <ServiceCard cardNumber='.03' cardTitle="Cloud Hosting" cardIcon="fas fa-sim-card fa-4x" />
      </Container>
    </section>
  );
}

const styles = css`
    width: 100%;
    padding: 120px 0;
    background: linear-gradient(180deg, rgba(248,245,242,1) 50%, rgba(255,255,255,1) 50%);
    .title{
      margin: 0 auto;
      .subtitle{
        padding: 30px 0 30px 70px;
      }
    }
    .container{
        display: flex;
        justify-content: space-between;
        padding: 60px 0 0 0;
    }
`;

export default Services;
