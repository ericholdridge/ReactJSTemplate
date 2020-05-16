/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useState } from "react";
import Container from "../GlobalComponents/Container";
import FooterCardData from "./FooterCardData";
import FooterBg from "../../images/footerbg.jpg";
import FooterBottom from "./FooterBottom";

function Footer() {
  const [data, setData] = useState(FooterCardData);
  return (
    <footer className="footer" css={styles}>
      <Container>
          <div className="flex">
          {data.map((cardItem, index) => (
            <div key={index} className="footerCard">
              {cardItem.cardLogo && <img src={cardItem.cardLogo} alt="logo" />}
              <h2>{cardItem.cardHeading}</h2>
              {cardItem.cardLink1 && <a href="/">{cardItem.cardLink1}</a>}
              {cardItem.cardLink2 && <a href="/">{cardItem.cardLink2}</a>}
              {cardItem.cardLink3 && <a href="/">{cardItem.cardLink3}</a>}
              {cardItem.cardLink4 && <a href="/">{cardItem.cardLink4}</a>}
              {cardItem.cardText && <p>{cardItem.cardText}</p>}
            </div>
          ))}
          </div>
        <FooterBottom />
      </Container>
    </footer>
  );
}

const styles = css`
    width: 100%;
    margin: 100px 0 0 0;
    background: url('${FooterBg}') no-repeat center/cover;
    .container {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        .flex {
            display: flex;
            justify-content: space-between;
            .footerCard {
            width: 100%;
            max-width: 200px;
            h2 {
                color: #fff;
                padding: 0 0 14px 0;
            }
            a {
                text-decoration: none;
                color: #8ba4b1;
                display: block;
                padding: 10px 0;
                transition: margin 900ms;
                &:hover {
                    color: #eb566c;
                    margin: 0 0 0 10px;
                }
            }
            p {
                color: #8ba4b1;
                padding: 10px 0 0 0;
                line-height: 2;
            }
        }
        }
    }
`;

export default Footer;
