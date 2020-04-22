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
        <LeftColumn>
          <JobInfoList />
        </LeftColumn>
        <RightColumn>
          <ApplicationForm />
        </RightColumn>
      </CenterContent>
    </OuterPadding>
  );
};

const OuterPadding = styled.div({
  padding: 20,
});

const CenterContent = styled.div(
  {
    display: "block",
    margin: "3rem auto",
    maxWidth: 1200,
    "&:after": {
      clear: "both",
      content: '""',
      display: "table",
    },
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      margin: "2rem auto",
    },
  })
);

const LeftColumn = styled.div(
  {
    width: "50%",
    float: "left",
    WebkitTapHighlightColor: "rgba(149, 201, 61, 0.4)",
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      float: "unset",
      width: "100%",
    },
  })
);

const RightColumn = styled.div(
  {
    width: "50%",
    float: "right",
    position: "sticky",
    top: "0",
  },
  ({ theme }) => ({
    [theme.media.max.md]: {
      float: "unset",
      position: "unset",
      top: "unset",
      width: "100%",
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
