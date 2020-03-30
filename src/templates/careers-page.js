import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ApplicationForm from "../components/application/ApplicationForm";
import InfoContainer from "../components/application/InfoContainer";

export const CareersPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <OuterPadding>
      <CenterContent>
        <InfoContainer />
        <ApplicationForm />
      </CenterContent>
    </OuterPadding>
  );
};

const OuterPadding = styled.div({
  padding: 20
});

const CenterContent = styled.div(
  {
    display: "flex",
    justifyContent: "center",
    margin: "10rem auto",
    maxWidth: 1200
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      flexDirection: "column",
      margin: "2rem auto"
    }
  })
);

CareersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const CareersPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CareersPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

CareersPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CareersPage;

export const aboutPageQuery = graphql`
  query CareersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
