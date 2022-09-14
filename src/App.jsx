import {Container} from './components/styles/Container.style'
import Header from './components/featurs/Header.component'
import { Theme } from './components/styles/Theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global.style'
export default function App() {

  return (
    <ThemeProvider theme={Theme}>
      <>
      <GlobalStyles/>
    <Header/>
    <Container>
      <h1>Hello World</h1>
    </Container>
      </>
    </ThemeProvider>
  )
}