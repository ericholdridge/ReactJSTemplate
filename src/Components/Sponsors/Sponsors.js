/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from '../../Components/GlobalComponents/Container';
import Title from '../GlobalComponents/Title';
import SponsorsLogo from './SponsorsLogo';

function Sponsors() {
    return (
        <section className="sponsors" css={styles}>
            <Container>
                <Title subtitle="Get your domain" title="We are with you every step of the way"/>
                <SponsorsLogo />
            </Container>
        </section>
    );
}

const styles = css`
    width: 100%;
    padding: 60px 0;
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
            h2 {
                padding: 30px 0 0 0;
            }
        }
    }
`;

export default Sponsors;