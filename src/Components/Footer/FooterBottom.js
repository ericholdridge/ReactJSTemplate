/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function FooterBottom() {
    return(
        <div className="footerBottom" css={styles}>
            <p>Copyright ©2020 All rights reserved | This template is made <i class="fas fa-heart"></i> with  by <a href="/">Colorlib</a></p>
            <div className="footerSocialIcons">
                <div className="footerSocialCircle">
                    <i className="fab fa-facebook-f"></i>
                </div>
                <div className="footerSocialCircle">
                    <i className="fab fa-twitter"></i>
                </div>
                <div className="footerSocialCircle">
                    <i className="fas fa-globe"></i>
                </div>
                <div className="footerSocialCircle">
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

const styles = css`
    display: flex;
    justify-content: space-between;
    margin: 120px 0 0 0;
    border-top: 1px solid #1c2e4c;
    padding: 60px 0 20px 0;
    i {
        color: #eb566c;
    }
    p {
        color: #8ba4b1;
        a {
            color: #eb566c;
            text-decoration: none;
        }
    }
    .footerSocialIcons {
        display: flex;
        .footerSocialCircle {
            height: 42px;
            width: 42px;
            border-radius: 50%;
            border: 1px solid #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 6px;
            transition: background 300ms ease-in-out, border 300ms ease-in-out;
            cursor: pointer;
            &:nth-child(4) {
                margin: 0 0 0 6px;
            }
            &:hover {
                background: #eb566c;
                border: 1px solid #eb566c;
                i{
                    color: #fff;
                }
            }
            i {
                color: #8ba4b1;
            }
        }
    }
`;

export default FooterBottom;