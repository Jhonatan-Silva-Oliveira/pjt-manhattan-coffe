import Logo from "../../assets/images/logo.png"

import { Section, ContainLogo, ContainNav } from "./Topo.style"

const Topo = () => {
  return (
    <Section>
      <div className="container">
        <ContainLogo>
          <img src={Logo} alt="logo" />
        </ContainLogo>
        
        <ContainNav>
          <a href="#">informações</a>
          
          <a href="#">contatos</a>
          
          <a href="#">horários</a>
        </ContainNav>
      </div>
    </Section>
  )
}

export default Topo