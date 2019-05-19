import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  date
}) => {
  const PostContent = contentComponent || Content

  return (
    <Wrapper>
      {helmet || ''}
      <Title>
        {title}
      </Title>
      <DateWrapper>{date}</DateWrapper>
      <ContentWrapper>
        <PostContent content={content} />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('wrapper')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '6vh'
})

const Title = styled('h1')({
  width: '100%',
  maxWidth: 800,
  textAlign: 'center',
  fontWeight: 300,
  fontSize:  40
})

const DateWrapper = styled('div')({
  fontStyle: 'italic'
}, ({theme}) => ({
  color: theme.mid.color
}))

const ContentWrapper = styled('article')({
  width: '100%',
  maxWidth: 600
})

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
