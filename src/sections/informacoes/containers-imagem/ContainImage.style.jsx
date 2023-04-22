import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-image: ${props => `url(${props.background})`} ;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .contain{
    width: 500px;
    text-align: center;
    padding: 10px;
    background-color: ${props => props.theme.marron};
  }
`
export const Title = styled.h3`
  font-family: ${props => props.theme.fraunces};
  color: ${props => props.theme.white};
  font-weight: 300;
  font-style: italic;
  letter-spacing: 1px;
`