import React from 'react'
import Layout from '../components/layout/layout'
import { Link, graphql } from 'gatsby'

import './blog.css'

const BlogPage = ({ data }) => (
  <Layout>
    <h1 className="title">Blog</h1>
    <section className="blog__section">
      {data.allMarkdownRemark.edges.map(post => (
        <Link to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
          {post.node.frontmatter.description}
        </Link>
      ))}
    </section>
  </Layout>
)

export default BlogPage

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            date
            description
          }
        }
      }
    }
  }
`
