import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import HeroBlock from "../components/about/HeroBlock";
import ContentBlocks from "../components/about/ContentBlocks";

export const AboutPageTemplate = ({
  block1Title,
  block1Description,
  block2Title,
  block2Description,
  block3Title,
  block3Description
}) => {
  return (
    <PageWrapper>
      <HeroBlock />
      <ContentBlocks
        block1Title={block1Title}
        block1Description={block1Description}
        block2Title={block2Title}
        block2Description={block2Description}
        block3Title={block3Title}
        block3Description={block3Description}
      />
    </PageWrapper>
  );
};

const PageWrapper = styled("section")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  paddingBottom: 50
});

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <AboutPageTemplate {...post.frontmatter} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        block1Title
        block1Description
        block2Title
        block2Description
        block3Title
        block3Description
      }
    }
  }
`;
