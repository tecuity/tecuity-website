import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'
import AboveFoldBlock from '../components/home/AboveFoldBlock'
import SmartFormsBlock from '../components/home/SmartFormsBlock'
import FeaturesBlock from '../components/home/FeaturesBlock'
import OneStopBlock from '../components/home/OneStopBlock'

export const IndexPageTemplate = ({smartTitle, smartDescription}) => (
  <PageWrapper>
    <AboveFoldBlock />
    <FeaturesBlock />
    <SmartFormsBlock title={smartTitle} description={smartDescription} />
    <OneStopBlock />
  </PageWrapper>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        smartTitle={frontmatter.smartTitle}
        smartDescription={frontmatter.smartDescription}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        smartTitle,
        smartDescription
      }
    }
  }
`

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  smartTitle: PropTypes.string,
  smartDescription: PropTypes.string
}

const PageWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})
