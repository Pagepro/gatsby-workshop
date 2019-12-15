import { Link } from 'gatsby'
import React from 'react'

import NavStyled from './styles/NavStyles'

const Header = ({ siteTitle }) => (
  <header>
    <div>
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
            <Link
              activeClassName="active"
              to="/blog"
              partiallyActive
            >
              Blog
            </Link>
          </li>
        </ul>
      </NavStyled>
    </div>
  </header>
)

export default Header
