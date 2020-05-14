/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import heroBgImage from '../../images/hero_right.webp';
import Button from '../GlobalComponents/Button';

function HeroInfo() {
    return(
    <div css={styles} className="heroInfo">
        <div className="info">
            <h2>Hosting digital technology web solution!</h2>
            <p>Automated Control Panel with Up to 50% Off Hosting Starting from $2.50/Month.</p>
        <Button btnText='GET STARTED' />
        </div>
        <div className="heroBg"></div>
    </div>
    )
}

// const HeroInfo = () => <div></div> f dis shit

const styles = css`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info{
        width: 100%;
        max-width: 500px;
        h2{
            font-size: 62px;
            font-weight: bold;
            line-height: 1.2;
        }
        p{
            font-size: 15px;
            margin: 30px 0;
            line-height: 1.8;
        }
        button{
            margin: 0;
        }
    }
    .heroBg {
    background: url('${heroBgImage}') no-repeat center/cover;
    width: 100%;
    max-width: 500px;
    height: 500px;
    }
`;

export default HeroInfo;