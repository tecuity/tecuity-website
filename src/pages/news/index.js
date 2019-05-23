import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout pageTitle="News">
        <PageWrapper>
          <Title>Latest News</Title>
          <BlogRoll />
        </PageWrapper>
      </Layout>
    )
  }
}

const PageWrapper = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: 100
})

const Title = styled('h1')({
  fontSize: 48,
  fontWeight: 300,
  textAlign: 'center'
}, ({theme}) => ({
  color: theme.mid.color,
  [theme.media.max.md]: {
    marginBottom: 55
  }
}))
