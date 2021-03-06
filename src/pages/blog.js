import React from 'react'
import Layout from '../components/layout/layout'
import { Link, graphql } from 'gatsby'

import { BlogMenu } from '../components/blogMenu/blogMenu'

import './blog.css'

const BlogPage = ({ data }) => (
  <Layout>
    <h1 className="title">Blog</h1>
    <BlogMenu />
    <section className="blog__section">
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.frontmatter.date} className="blog__post">
          <h1>{post.node.frontmatter.title}</h1>
          <h3>{post.node.frontmatter.formattedDate}</h3>
          <p>{post.node.frontmatter.description}</p>
          <Link to={post.node.frontmatter.path} className="blog__link">
            Keep reading
          </Link>
        </div>
      ))}
    </section>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
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
            formattedDate
          }
        }
      }
    }
  }
`
