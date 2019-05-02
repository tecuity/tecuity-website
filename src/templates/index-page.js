import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import AboveFoldBlock from '../components/home/AboveFoldBlock'
import FeaturesBlock from '../components/home/FeaturesBlock'

export const IndexPageTemplate = ({ }) => (
  <PageWrapper>
    <AboveFoldBlock />
    <FeaturesBlock />
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
