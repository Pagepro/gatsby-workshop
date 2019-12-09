import styled from 'styled-components'

const PostsListStyled = styled.ul`
  margin: 0;

  li {
    border-bottom: 1px solid var(--grey);
    padding-bottom: 1.45rem;
    margin-bottom: 1.45rem;
  }

  h2 {
    transition: 170ms ease;
    margin-bottom: .75rem;

    &:hover {
      color: var(--purple);
    }
  }

  span {
    display: block;
    text-transform: uppercase;
    color: var(--grey);
    margin-bottom: 1.25rem;
  }
`

export default PostsListStyled
