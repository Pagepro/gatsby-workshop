import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const Template = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
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
