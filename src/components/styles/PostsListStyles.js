import styled from 'styled-components'

const PostsListStyled = styled.ul`
  margin: 0;

  li {
    border-bottom: 1px solid var(--grey);
    padding-bottom: 1.45rem;
    margin-bottom: 1.45rem;
    
  }

  h1 {
    transition: 170ms ease;
    &:hover {
      color: var(--purple);
    }
  }
`

export default PostsListStyled
