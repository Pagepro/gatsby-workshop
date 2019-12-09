import styled from 'styled-components'

const LayoutStyled = styled.div`
  header {
    padding: 1.45rem 1.0875rem;
    background: var(--purple);
    margin-bottom: 1.45rem;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  main,
  footer {
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;
  }
`

export default LayoutStyled
