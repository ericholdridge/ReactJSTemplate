/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ServiceImage from '../../images/servicesImage.png';

const ServiceCard = ({ cardTitle, cardIcon, cardNumber }) => (
  <div className="serviceCard" css={styles}>
    <i className={cardIcon}></i>
    <div className="info">
      <h2>{cardTitle}</h2>
      <p>
        Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly
        good ruddy!
      </p>
    </div>
    <div className="getStarted">
      <a href="#/">
        <div className="icon">
          <i className="fas fa-arrow-right"></i>
        </div>
        GET STARTED
      </a>
    </div>
    <div className="serviceBg">
      <h3>{cardNumber}</h3>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 380px;
  background: #fff;
  padding: 100px 0 0 0;
  cursor: pointer;
  &:hover{
    i{
      color: #eb566c;
    }
    .getStarted{
      a{
        color: #eb566c;
        .icon{
          background: #eb566c;
        }
      }
    }
  }
  > i{
    cursor: pointer;
    transition: color 500ms ease-in-out;
    padding: 0 60px;
  }
  .info {
    padding: 0 60px;
    h2{
      color: #28395a;
      font-size: 24px;
      line-height: 1;
      padding: 70px 0 16px 0;
    }
    p {
      color: #10285d;
      line-height: 1.8;
      padding: 0 0 10px 0;
    }
  }
  .getStarted {
    padding: 30px 60px;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #28395a;
      font-weight: bold;
      font-size: 14px;
      transition: color 500ms ease-in-out;
      .icon {
        margin-right: 20px;
        height: 22px;
        width: 22px;
        background: #28395a;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 500ms ease-in-out;
        i {
          color: #fff;
        }
      }
    }
  }
  }
  .serviceBg{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 8px;
    background: url('${ServiceImage}') no-repeat center/cover;
    h3{
      color: #eb566c;
      font-size: 34px;
      line-height: 1;
    }
  }
`;

export default ServiceCard;
