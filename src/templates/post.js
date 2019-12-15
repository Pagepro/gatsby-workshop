import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Template = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($originalPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $originalPath } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
