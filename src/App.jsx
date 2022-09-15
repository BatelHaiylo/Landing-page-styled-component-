import {Container} from './components/styles/Container.style'
import Header from './components/featurs/Header.component'
import { Theme } from './components/styles/Theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global.style'
import content from './content'
import Card from './components/featurs/Card.component'

export default function App() {

  return (
    <ThemeProvider theme={Theme}>
      <>
      <GlobalStyles/>
    <Header/>
    <Container>
      {content.map((item,index) => (
        <Card key={index} item = {item}/>
      ))}
    </Container>
      </>
    </ThemeProvider>
  )
}