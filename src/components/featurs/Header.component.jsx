import { StyledHeader,Nav,Logo,StyledImage } from "../styles/Header.style";
import {Container} from '../styles/Container.style'
import {StyledButton} from '../styles/Button.component'
import {StyledFlex} from '../styles/Flex.styled'

export default function Header() {
    return ( 
        <StyledHeader>
            <Container>
                    <Nav>
                    <Logo src='./images/logo.svg' alt="logo"/>
                    <StyledButton>Try It Free</StyledButton>
                    </Nav>

                    <StyledFlex>
                        <div>
                            <h1>Build The Community Your Fans Will Love</h1>

                            <p>
                                Huddle re-imagines the way we build communities. You have a voice,
                                but so does your audience. Create connections with your users as
                                you engage in genuine discussion. 
                            </p>

                            <StyledButton bg='#ff0099' color='#fff'>
                              Get Started For Free
                            </StyledButton>
                        </div>
                          <StyledImage src='./images/mockups.svg' alt='' />
                        
                    </StyledFlex>
            </Container>
        </StyledHeader>
     );
}
