import styled from 'styled-components'

const NavStyled = styled.nav`
  ul {
    display: flex;
    margin: 0;
  }
  li {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  a {
    padding: 2px;
    font-weight: 600;
    font-size: 18px;
    &.active {
      background: var(--white);
      color: var(--purple);
    }
  }
`

export default NavStyled
