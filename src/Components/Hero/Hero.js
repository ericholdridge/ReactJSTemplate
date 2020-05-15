/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import HeroInfo from './HeroInfo';
import Container from '../GlobalComponents/Container';
import HeroSocial from './HeroSocial';
import Navbar from '../Navbar/Navbar';

function Hero() {
    return (
      <section className="hero" css={styles}>
        <Navbar />
          <HeroSocial />
        <Container>
          <HeroInfo />
        </Container>
      </section>
    );
}

const styles= css`
  background: #020230;
  min-height: 100vh;
  display: flex;
  position: relative;
  .container {
      margin: auto;
  }
`;

export default Hero;

