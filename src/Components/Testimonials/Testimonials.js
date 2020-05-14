/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Slider from "infinite-react-carousel";
import TestimonialCard from './TestimonialCard';
import Container from '../GlobalComponents/Container';
import TestimonialImg from "../../images/testimonialImg.png";
import TestimonialShape from "../../images/testimonialShape.png";

function Testimonials() {
    return (
        <section css={styles} className="testimonials">
        <img src={TestimonialShape} alt="bg"/>
            <Container>
            {/* autoplay={true} */}
                <Slider className='slider'>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                </Slider>
                <div className="testimonialBg"></div>
            </Container>
        </section>
    );
}

const styles = css`
    width: 100%;
    position: relative;
    padding: 100px 0;
    > img{
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .slider{
            width: 100%;
            max-width: 540px;
        }
        .testimonialBg{
            width: 100%;
            max-width: 500px;
            height: 400px;
        background: url('${TestimonialImg}') no-repeat center/cover;
        }
    }
`;

export default Testimonials;