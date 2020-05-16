/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import BlogCardInfo from "./BlogCardInfo";

import Blog1 from "../../images/blog1.png";
import Blog2 from "../../images/blog2.png";
import Blog3 from "../../images/blog3.png";


function BlogCard({text}) {
    const cardImages = [Blog1, Blog2, Blog3];
    const cardInfo = [
        {
            date: "23 DEC, 2020",
            title: "Addiction When Gambling Becomes"
        }
    ]
    return (
        <div className="imgWrapper" css={styles}>
            {cardImages.map((img, index) => (
                <div className="card"css={styles} key={index} style={{background: `url(${img}) no-repeat center/cover`}}>
                    {cardInfo.map((info, index) => {
                        return <BlogCardInfo key={index} date={info.date} title={info.title}/>
                    })}
                </div>
            ))}
        </div>
    )
}

const styles = css`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 80px 0 0 0;
    .card {
        width: 100%;
        max-width: 350px;
        border-radius: 6px;
        .cardInfo {
            width: 100%;
            max-width: 330px;
            position: absolute;
            right: 0;
            bottom: -60px;
        }
    }
`;

export default BlogCard;