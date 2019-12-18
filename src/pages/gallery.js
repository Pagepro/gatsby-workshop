import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Gallery = ({ data }) => {
  console.log(data)
  const gatsbyImages = data.gatsbyImages.edges
  console.log(gatsbyImages)

  return (
    <Layout>
      <SEO title="Gallery" />
      <h1>Gallery</h1>
      <p>This is gallery of pictures!</p>
      <div style={{ maxWidth: '250px' }}>
        <Image />
      </div>
      <div style={{ maxWidth: '700px' }}>
        <Img fluid={data.dog1.childImageSharp.fluid} alt="Picture" />
      </div>
      <Img fixed={data.dog2.childImageSharp.fixed} alt="Picture" />
      {gatsbyImages.map(({ node: picture }) => (
        <div key={picture.id}>
          <Img fixed={picture.fixed} />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    dog1: file(relativePath: { eq: "dog1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    dog2: file(relativePath: { eq: "dog2.jpeg" }) {
      childImageSharp {
        fixed(width: 700) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    gatsbyImages: allImageSharp(filter: {original: {src: {regex: "/gatsby/"}}}) {
      edges {
        node {
          id
          fixed(width: 300) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }   
  }
`

export default Gallery
