/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import NavbarLogo from './NavbarLogo';
import Container from '../GlobalComponents/Container';
import NavbarLink from './NavbarLink';
import { useState } from "react";

function Navbar() {
    return (
      <nav css={navbar}>
        <Container>
          <NavbarLogo />
          <NavbarLink />
        </Container>
      </nav>
    );
}

const navbar = css`
  width: 100%;
  padding: 24px 0;
  background: #020230;
  color: #fff;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Navbar;