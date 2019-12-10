import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Image from '../components/Image'

const SecondPage = ({ data }) => (
  <Layout>
    <h1>Second Page</h1>
    <div style={{ maxWidth: '250px' }}>
      <Image />
    </div>
    <div style={{ maxWidth: '700px' }}>
      <Img fluid={data.dog1.childImageSharp.fluid} alt="Picture" />
    </div>
    <Img fixed={data.dog2.childImageSharp.fixed} alt="Picture" />
  </Layout>
)

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
  }
`

export default SecondPage
