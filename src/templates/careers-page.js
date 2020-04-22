import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ApplicationForm from "../components/application/ApplicationForm";
import InfoContainer from "../components/application/InfoContainer";
import JobInfoList from "../components/application/JobInfoList";

export const CareersPageTemplate = ({ title, subtitle, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <OuterPadding>
      <InfoContainer title={title} subtitle={subtitle} />
      <CenterContent>
        <JobInfoList />
        <ApplicationForm />
      </CenterContent>
    </OuterPadding>
  );
};

const OuterPadding = styled.div({
  padding: 20,
});

const CenterContent = styled.div(
  {
    display: "flex",
    justifyContent: "center",
    margin: "10rem auto",
    maxWidth: 1200,
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      flexDirection: "column",
      margin: "2rem auto",
    },
  })
);

CareersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  contentComponent: PropTypes.func,
};

const CareersPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CareersPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
      />
    </Layout>
  );
};

CareersPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CareersPage;

export const pageQuery = graphql`
  query CareersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "careers-page" } }) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
