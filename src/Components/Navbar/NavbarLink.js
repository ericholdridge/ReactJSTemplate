/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Button from '../GlobalComponents/Button';

function NavbarLink() {
  const navLink = [
    "Home",
    "About",
    "Services",
    "Blog",
    "Pages",
    "Contact",
  ];
  return (
    <div>
      {navLink.map((link, index) => (
        <a key={index} href={`/${link}`} css={styles}>{link}</a>
      ))}
      <Button btnText="+880.762.009" btnIcon="fas fa-headphones-alt fa-lg"/>
    </div>
  );
}

const styles = css`
  color: white;
  text-decoration: none;
  padding-right: 30px;
  font-weight: bold;
  font-size: 16px;
  transition: color 300ms ease-in-out;
  &:hover{
    color: #eb566c;
  }
  button{
  margin-left: 100px;
  }
`

export default NavbarLink;
 