import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import PostsListStyled from '../components/styles/PostsListStyles'

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <PostsListStyled>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={`/blog/${post.frontmatter.path}`}>
              <h1>{post.frontmatter.title}</h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </PostsListStyled>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
