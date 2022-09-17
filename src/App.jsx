import {Container} from './components/styles/Container.style'
import Header from './components/features/features'
import { Theme } from './components/styles/Theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global.style'
import content from './content'
import Card from './components/features/Card.component'
import Footer from './components/features/Footer.component'

export default function App() {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
    <Header/>
    <Container>
      {content.map((item,index) => (
        <Card key={index} item = {item}/>
      ))}
    </Container>
    <Footer/>
    </ThemeProvider>
  )
}