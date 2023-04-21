import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;
  
  .contain{
    width: 80vw;
    max-width: 1024px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
  }
`
export const Title = styled.h3`
  color: ${props => props.theme.goldenL};
  font-family: ${props => props.theme.oswald};
`
export const Texto = styled.p`
  color: ${props => props.theme.greyF};
  font-family: ${props => props.theme.lato};
  text-align: center;
  margin-top: 30px;
`