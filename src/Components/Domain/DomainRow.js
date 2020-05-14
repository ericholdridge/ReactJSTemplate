/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const DomainRow = () => {
  const domains = [
    {
      domain: ".com",
      price: "$3.99/Year",
      color: "#eb566c",
    },
    {
      domain: ".net",
      price: "$2.99/Year",
      color: "#ffdd74",
    },
    {
      domain: ".com",
      price: "$3.99/Year",
      color: "#74ff9f",
    },
    {
      domain: ".co",
      price: "$5.99/Year",
      color: "#748bff",
    },
    {
      domain: ".org",
      price: "$2.99/Year",
      color: "#f074ff",
    },
    {
      domain: ".live",
      price: "$1.99/Year",
      color: "#f074ff",
    },
  ];

  return (
    <div css={styles} className="domainRow">
      {domains.map((row) => (
        <div className="row">
          <p style={{color: row.color}}>{row.domain}</p>
          <span>{row.price}</span>
        </div>
      ))}
    </div>
  );
};

const styles = css`
  width: 100%;
  border: 1px solid #032a57;
  display: flex;
  border-radius: 12px;
  margin: 40px 0 0 0;
  .row {
    width: 100%;
    max-width: 200px;
    padding:16px 20px;
    border-right: 1px solid #032a57;
    &:last-of-type{
        border-right: none;
    }
    p{
        margin-bottom: 3px;
        font-size: 15px;
    }
    span {
      color: #636376;
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export default DomainRow;
