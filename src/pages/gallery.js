import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Gallery = ({ data }) => {
  const cats = data.cats.edges

  return (
    <Layout>
      <SEO title="Gallery" />
      <h1>Gallery</h1>
      <p>This is gallery of pictures!</p>
      <div style={{ maxWidth: '250px' }}>
        <Image />
      </div>
      <div style={{ maxWidth: '700px' }}>
        <Img fluid={data.cat1.childImageSharp.fluid} alt="Picture" />
      </div>
      <Img fixed={data.cat2.childImageSharp.fixed} alt="Picture" />
      {cats.map(({ node: cat }) => (
        <div key={cat.id}>
          <Img fixed={cat.fixed} />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    cat1: file(relativePath: { eq: "cat1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cat2: file(relativePath: { eq: "cat2.jpeg" }) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    cats: allImageSharp(filter: {original: {src: {regex: "/cat/"}}}) {
      edges {
        node {
          id
          fixed(width: 700) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }   
  }
`

export default Gallery
