import Banner from "../../assets/images/parallax-imagem1.png"

import styled from 'styled-components'

export const Section = styled.section`
  min-height: 100vh;
  background-image: url(${Banner});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  
  h1{
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.fraunces};
    font-size: ${props => props.theme.fontxxl};
    font-weight: 300;
  }
`
