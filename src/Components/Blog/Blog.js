/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <section className="blog" css={styles}>
      <Container>
        <Title subtitle="Our Blog" title="Our latest news" />
          <BlogCard/>
      </Container>
    </section>
  );
}

const styles = css`
  width: 100%;
  .container {
    padding: 100px 0 120px 0;
    .title {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            padding: 40px 0 0 0;
        }
    }
  }
`;

export default Blog;
