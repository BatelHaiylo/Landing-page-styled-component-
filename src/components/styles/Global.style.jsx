import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nabla&display=swap');
    *{
        box-sizing: border-box;
    }
    body{
        background: ${({theme})=>theme.colors.body};
        color: hsl(192,100%,9%);
        font-family: 'Nabla', cursive;
        font-size: 1.15em;
    }
    p{
        opacity: 0.6;
        line-height: 1.5;
    }
    img{
        max-width: 100%;
    }
`
export default GlobalStyles