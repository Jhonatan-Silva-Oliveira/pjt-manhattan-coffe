import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/GlobalStyles";

import { light } from "./assets/styles/Themes";
import Topo from "./components/topo/Topo";
import Banner from "./sections/banner/Banner";
import Info from "./sections/informacoes/Info";
import Contatos from "./sections/contatos/Contatos";

function App() {
  return (
    <>
      <GlobalStyles />
      
      
      <ThemeProvider theme={light}>
      
        <main className='App'>
          <Topo />
          <Banner />
          <Info />
          <Contatos />
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
