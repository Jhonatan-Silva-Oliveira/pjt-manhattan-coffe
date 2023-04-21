import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 50vh;
  background-image: ${props => `url(${props.background})`} ;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  .contain{
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
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
`