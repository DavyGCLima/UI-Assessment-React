import styled, {css} from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 3rem;
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 2;
  grid-template-rows: 2;
  grid-template-areas: 
    "header header"
    "success saved";
  
`


const Cell = css`
  padding: 1rem;
`

export const Header = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  border-bottom: 1px solid gray;

  ${Cell}

  div {
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;
    margin-bottom: 1rem;

    strong {
      width: 100%;
      text-align: start;
       width: 100%;
      
      font-size: large;
    }
  }

  :first-child() {
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const PercentageSection = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: start;
`
  
export const SucessCell = styled.div`
  grid-area: success;
  border-right: 1px solid gray;
  ${PercentageSection}
  ${Cell}
`

export const SavedCell = styled.div`
  grid-area: saved;
  ${PercentageSection}
  ${Cell}
`

export const NumberPercentage = styled.span`
  font-size: 3rem;
  color: green;
  width: 100%;
  
`

export const Percentagelabel = styled.span`
  font-size: large;
  text-transform: uppercase;
  width: 100%;
`
