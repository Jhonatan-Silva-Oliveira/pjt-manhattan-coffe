import styled from 'styled-components'

export const Section = styled.header`
  position: fixed;
  width: 100vw;
  background-color: ${props => props.theme.marron};
  display: flex;
  justify-content: center;
  z-index: 100;
  
  .container{
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const ContainLogo = styled.div`
  width: 80px;
  
  img{
    width: 100%;
  }
`
export const ContainNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  text-transform: uppercase;
  font-family: ${props => props.theme.oswald};
  color: ${props => props.theme.goldenL};
  text-shadow: 2px 2px 2px black;
  letter-spacing: 2px;
  
  a{
    padding: 5px;
    font-size: ${props => props.theme.fontpp}
  }
`
