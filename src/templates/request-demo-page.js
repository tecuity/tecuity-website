import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import RequestForm from '../components/request/RequestForm'

export const RequestDemoPageTemplate = ({ title }) => {

  return (
    <section>
      <RequestForm />
    </section>
  )
}

RequestDemoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const RequestDemoPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <RequestDemoPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

RequestDemoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RequestDemoPage

export const aboutPageQuery = graphql`
  query RequestDemoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
