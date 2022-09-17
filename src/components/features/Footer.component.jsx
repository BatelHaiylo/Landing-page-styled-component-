import {Container} from '../styles/Container.style'
import {StyledFlex} from '../styles/Flex.style'
import {StyledFoote} from '../styles/Footer.style'
import SocialIcons from './SocialIcons.component';

export default function Footer() {
    return ( 
        <StyledFoote>
            <Container>
                <img src="./images/logo_white.svg" alt="white logo"/>

                <StyledFlex>
                    <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </li>
                        <li>+1-543-123-4567</li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
          <SocialIcons />
                </StyledFlex>
                <p>&copy; 2022 Huddle. All rights reserved</p>
            </Container>
        </StyledFoote>
     );
}