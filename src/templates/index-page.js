import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AboveFoldBlock from '../components/home/AboveFoldBlock'
import SmartFormsBlock from '../components/home/SmartFormsBlock'
import FeaturesBlock from '../components/home/FeaturesBlock'

export const IndexPageTemplate = () => (
  <PageWrapper>
    <AboveFoldBlock />
    <FeaturesBlock />
    <SmartFormsBlock />
  </PageWrapper>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
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
      }
    }
  }
`

const PageWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})
