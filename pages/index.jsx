import styled from 'styled-components'

import BackgroundImageWithChildren from '../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren'

const StyledDiv = styled.div`
  background-color: red;

  * {
    margin: 0;
    padding: 0;
  }
`

export default function HomePage() {
  return (
    <BackgroundImageWithChildren>
      <StyledDiv>
        Pagina inicial
      </StyledDiv>
    </BackgroundImageWithChildren>
  )
}
