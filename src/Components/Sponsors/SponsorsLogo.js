/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import Brand from '../../images/cisco_brand.png';
import Brand2 from '../../images/cisco_brand2.png';
import Brand3 from '../../images/cisco_brand3.png';
import Brand4 from '../../images/cisco_brand4.png';
import Brand5 from '../../images/cisco_brand5.png';
import Brand6 from '../../images/cisco_brand6.png';

function SponsorsLogo () {
    const images = [Brand, Brand2, Brand3, Brand4, Brand5, Brand6];
    return (
        <div css={styles}>
        {images.map((image, index) => (
            <img src={image} key={index} alt=""/>
        ))}
        </div>
    )
}

const styles = css`
width: 100%;
max-width: 680px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
    img{
        margin-bottom: 10px;
    }
`;

export default SponsorsLogo;