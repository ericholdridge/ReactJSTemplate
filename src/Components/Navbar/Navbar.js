/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from '../GlobalComponents/Container';
import NavbarLink from './NavbarLink';
import NavbarLogo from './NavbarLogo';

function Navbar() {
    return (
      <nav css={styles}>
        <Container>
          <NavbarLogo />
          <NavbarLink />
        </Container>
      </nav>
    );
}

const styles = css`
  width: 100%;
  padding: 24px 0;
  color: #fff;
  position: absolute;
  top: 0;
  z-index: 10;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1580px;
  }
`;

export default Navbar;