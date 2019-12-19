import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import PaginationStyled from '../components/styles/PagionationStyles'

const Template = ({ data, pageContext: { prev, next } }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <PaginationStyled>
          {prev && (
            <Link className="prev" to={`/blog/${prev.frontmatter.path}`}>
              {prev.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link className="next" to={`/blog/${next.frontmatter.path}`}>
              {next.frontmatter.title}
            </Link>
          )}
        </PaginationStyled>
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
