/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function BlogCardInfo({date, title}) {
    return (
        <div className="cardInfo" css={styles}>
            <span>{date}</span>
            <h3>{title}</h3>
        </div>
    )
}

const styles = css`
background: #fff9f9;
border-radius: 10px;
padding: 26px 16px;
    span {
        display: block;
        color: #57667e;
        text-transform: uppercase;
    }
    h3 {
        padding: 16px 0 0 0;
    }
`

export default BlogCardInfo;