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
      {navLink.map(link => (
        <a href={`/${link}`} css={aLinkStyles}>{link}</a>
      ))}
      <Button btnText="+880.762.009" btnIcon="fas fa-headphones-alt fa-lg"/>
    </div>
  );
}

const aLinkStyles = css`
  color: white;
  text-decoration: none;
  padding-right: 30px;
  font-weight: bold;
  font-size: 16px;
  transition: color 300ms ease-in-out;
  &:hover{
    color: red;
  }
`

export default NavbarLink;
 