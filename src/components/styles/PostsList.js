import styled from 'styled-components'

const PostsList = styled.ul`
  margin: 0;

  li {
    border-bottom: 1px solid var(--grey);
    padding-bottom: 50px;
    margin-bottom: 50px;
  }

  h2 {
    transition: 170ms ease;
    margin-bottom: 10px;

    &:hover {
      color: var(--purple);
    }
  }

  span {
    display: block;
    text-transform: uppercase;
    color: var(--grey);
    margin-bottom: 20px;
  }
`;

export default PostsList
