import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const Label = styled.label`
  text-transform: uppercase;
  font-size: medium;
  font-weight: 600;
  width: 100%;
  flex-grow: 1;
  text-align: start;
  margin-bottom: 1rem;
`

export const Line = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.8rem;
  ${({wrap}) => wrap === 'true' ? 'flex-wrap: wrap;' : ''}
  
  & > strong {
    width: 100%;
    height: min-content;
    text-align: start;
  }

  @media (max-width: 480px) {
    ${({wrap}) => wrap === 'true' ? 'flex-wrap: wrap; flex-shrink: 0;' : ''}
  }
`

export const Miniature = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: #f5d000;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`