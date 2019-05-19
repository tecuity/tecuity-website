import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import PostBlock from "./PostBlock";

const BlogRoll = ({ data}) => {
  const [maxPosts, setMaxPosts] = useState(6)
  const { edges: posts } = data.allMarkdownRemark;

  const incrementMaxPosts = () => setMaxPosts(max => max + 6)

  return (
    <Wrapper>
      {posts &&
        posts.slice(0, maxPosts).map(({ node: post }, i) => <PostBlock {...post} index={i} key={i} />)}
      {
        maxPosts < posts.length &&
        <LoadMoreWrapper>
          <LoadMoreButton onClick={incrementMaxPosts}>
            Load More
          </LoadMoreButton>
        </LoadMoreWrapper>
      }
    </Wrapper>
  );
}

const LoadMoreWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'center',
  padding: 30
})

const LoadMoreButton = styled('button')({
  padding: 15,
  borderRadius: 2,
  border: 'none',
  boxShadow: `0 10px 30px -5px rgba(50,50,93,.15), 0 10px 10px -10px rgba(0,0,0,.1), 0 -18px 20px -5px rgba(0,0,0,.015)`,
  textTransform: 'uppercase'
})

const Wrapper = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: 650
});

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
