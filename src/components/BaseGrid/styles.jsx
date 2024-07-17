import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 3rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    font-size: 2rem;
    width: 50%;
    text-align: start;
  }

   @media (max-width: 480px) {
    flex-direction: column;

    h1 {
      width: 100%;
    }
  }
`