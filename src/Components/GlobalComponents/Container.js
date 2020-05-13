/** @jsx jsx */
import { css, jsx } from '@emotion/core'

function Container({children}) {
    return (
      <div className="container" css={container}>{children}</div>
    );
}

const container = css`
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
`;

export default Container;