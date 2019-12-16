import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import StyledNav from './styles/StyledNav'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <StyledNav>
        <ul>
          <li>
            <Link activeClassName="active" to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/blog" partiallyActive>
              Blog
            </Link>
          </li>
        </ul>
      </StyledNav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
