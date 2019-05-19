const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const orderBy = require('lodash/orderBy')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    const blogPosts = posts
      .filter(p => p.node.frontmatter.templateKey === 'news-post')
      .map(p => ({...p, order: new Date(p.node.frontmatter.date).getTime()}))
    const orderedBlogPosts = orderBy(blogPosts, ['order'], ['desc'])

    posts.forEach(edge => {
      const id = edge.node.id
      const currentIndex = orderedBlogPosts.findIndex(p=>p.node.fields.slug === edge.node.fields.slug)
      const prevId = orderedBlogPosts[currentIndex - 1] ? orderedBlogPosts[currentIndex - 1].node.id : ""
      const nextId = orderedBlogPosts[currentIndex + 1] ? orderedBlogPosts[currentIndex + 1].node.id : ""
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          prevId,
          nextId
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
