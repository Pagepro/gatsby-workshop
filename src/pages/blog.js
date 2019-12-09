import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import PostsList from '../components/styles/PostsList'

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => (
    {
      id: node.id,
      date: node.frontmatter.date,
      title: node.frontmatter.title,
      path: node.frontmatter.path,
      excerpt: node.excerpt,
    }
  ))

  return (
    <Layout>
      <PostsList>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={post.path}>
              <h2>{post.title}</h2>
              <span>{post.date}</span>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </PostsList>
      <Link to="/">Home Page</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default BlogPage
