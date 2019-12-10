import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from './Header'
import LayoutStyled from './styles/LayoutStyles'
import './styles/global.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutStyled>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </LayoutStyled>
  )
}

export default Layout
