import styled from 'styled-components'

const LayoutStyled = styled.div`
  header {
    background: var(--purple);
    margin-bottom: 1.45rem;
    color: var(--white);
    > div {
      max-width: 960px;
      margin: 0 auto;
      padding: 1.45rem 1.0875rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  main,
  footer {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1.0875rem 1.45rem;
  }
`

export default LayoutStyled
