import React from "react";
import { graphql, Link } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";
import styled from "@emotion/styled";

export const GenericPageTemplate = ({
  title,
  html,
  content,
  contentComponent
}) => {
  const PostContent = contentComponent || Content;
  return (
    <PageWrapper>
      <Title>{title}</Title>
      <ContentWrapper>
        <PostContent content={content} />
      </ContentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled("section")(
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "6vh"
  },
  ({ theme }) => ({
    [theme.media.max.sm]: {
      paddingLeft: 20,
      paddingRight: 20
    }
  })
);

const Title = styled("h1")(
  {
    width: "100%",
    maxWidth: 800,
    textAlign: "center",
    fontWeight: 300,
    fontSize: 40
  },
  ({ theme }) => ({
    color: theme.dark.color
  })
);

const ContentWrapper = styled("article")(
  {
    width: "100%",
    maxWidth: 800,
    lineHeight: 1.45,
    fontWeight: 300,
    fontSize: 18,
    marginBottom: 100,
    "& h1,h2,h3,h4,h5,h6": {
      fontWeight: 500
    }
  },
  ({ theme }) => ({
    color: theme.dark.color
  })
);

const GenericPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout pageTitle={post.frontmatter.title}>
      <GenericPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        {...post.frontmatter}
      />
    </Layout>
  );
};

export default GenericPage;

export const genericPageQuery = graphql`
  query GenericPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
