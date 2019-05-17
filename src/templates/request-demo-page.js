import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from '@emotion/styled'
import RequestForm from '../components/request/RequestForm'
import bgSrc from '../img/green-bg.svg'

export const RequestDemoPageTemplate = ({ title }) => {

  return (
    <PageWrapper>
      <Title>Request a Demo</Title>
      <RequestForm />
      {/* <BGWRapper>
        <Background src={bgSrc} />
      </BGWRapper> */}
    </PageWrapper>
  )
}

const Title = styled('h1')({
  fontSize: 48,
  fontWeight: 300,
  marginBottom: 10,
  marginTop: '5vh'
}, ({theme}) => ({
  color: theme.mid.color,
  [theme.media.max.md]: {
    marginBottom: 0
  }
}))

const PageWrapper = styled('div')({
  flex: '1 0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
})

const BGWRapper = styled('div')({
  width: '100%',
  position: 'relative',
  marginBottom: -10,
  zIndex: -1
})

const Background = styled('img')({
  width: '100%'
})

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
