import {FaTwitter,FaLinkedin,FaBehance,FaGithub} from 'react-icons/fa'
import {StyledSocialIcons} from '../styles/SocialIcons.style'

export default function SocialIcons() {
    return ( 
        <StyledSocialIcons>
            <li>
              <a href='https://github.com/BatelHaiylo' target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href='https://www.behance.net/HAIYLOB' target="_blank">
                <FaBehance />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/batel-haiylo/' target="_blank">
                <FaLinkedin />
              </a>
            </li>
    </StyledSocialIcons>
     );
}