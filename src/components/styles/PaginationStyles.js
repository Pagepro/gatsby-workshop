import styled from 'styled-components'

const PaginationStyled = styled.div`
  .prev {
    float: left;
    
    &::before {
      margin-right: .75rem;
      content: '<';
    }
  }

  .next {
    float: right;

    &::after {
      margin-left: .75rem;
      content: '>';
    }
  }

  .prev,
  .next {
    border: 1px solid var(--purple);
    padding: .5rem 1rem;
    color: var(--purple);
    transition: 170ms ease;

    &:hover {
      color: var(--white);
      background: var(--purple);
    }
  }

  &::after {
    display: block;
    content: '';
    height: 0;
    clear: both;
  }
`

export default PaginationStyled
