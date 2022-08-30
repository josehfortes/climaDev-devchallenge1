import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: red;

  * {
    margin: 0;
    padding: 0;
  }
`

export default function HomePage() {
  return (
    <StyledDiv>
      Pagina inicial
    </StyledDiv>
  )
}
