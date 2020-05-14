/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from '..//GlobalComponents/Container';
import VisitInfo from './VisitInfo';

function Visit() {
    return (
        <section className="visit" css={styles}>
            <Container>
                <VisitInfo />
            </Container>
        </section>
    );
}

const styles = css`
    width: 100%;
    padding: 120px 0;
`;

export default Visit;

