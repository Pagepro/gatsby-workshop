import { Link } from 'gatsby'
import React from 'react'

import NavStyled from './styles/NavStyles'

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <NavStyled>
      <ul>
        <li>
          <Link activeClassName="active" to="/gallery">
            Gallery
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </NavStyled>
  </header>
)

export default Header
