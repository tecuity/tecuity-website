import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import AboveFoldBlock from "../components/rules/AboveFoldBlock";
import AgenciesBlock from "../components/rules/AgenciesBlock";
import FeaturesBlock from "../components/rules/FeaturesBlock";
// import OneStopBlock from "../components/home/OneStopBlock";
// import BackOfficeBlock from "../components/home/BackOfficeBlock";
import ReviewBlock from "../components/home/ReviewBlock";
import CallToActionBlock from '../components/rules/CallToActionBlock'

export const IndexPageTemplate = ({
  smartTitle,
  smartDescription,
  reviewQuote1,
  reviewAuthor1,
  oneStopTitle,
  oneStopDescription,
  backOfficeTitle,
  backOfficeDescription,
  reviewQuote2,
  reviewAuthor2
}) => (
  <PageWrapper>
    <AboveFoldBlock />
    <FeaturesBlock />
    <AgenciesBlock
      title={smartTitle}
      description={smartDescription}
    />
    <ReviewBlock quote={reviewQuote1} author={reviewAuthor1} colorKey="rules" />
    {/* <OneStopBlock
      title={oneStopTitle}
      description={oneStopDescription}
    />
    <BackOfficeBlock
      title={backOfficeTitle}
      description={backOfficeDescription}
    />
    <ReviewBlock quote={reviewQuote2} author={reviewAuthor2} /> */}
    <CallToActionBlock colorKey="rules"/>
  </PageWrapper>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout pageTitle="Administrative Rules" themeColor="#2c58c4">
      <IndexPageTemplate
        title={frontmatter.title}
        smartTitle={frontmatter.smartTitle}
        smartDescription={frontmatter.smartDescription}
        {...frontmatter}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "rules-page" } }) {
      frontmatter {
        title
        smartTitle
        smartDescription
        reviewQuote1
        reviewAuthor1
        oneStopTitle
        oneStopDescription
        backOfficeTitle
        backOfficeDescription
        reviewQuote2
        reviewAuthor2
      }
    }
  }
`;

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  smartTitle: PropTypes.string,
  smartDescription: PropTypes.string
};

const PageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});
