import styled from "styled-components";
import Header from "../featurs/Header.component";

export const StyledHeader= styled.header`
background-color: #ebfbff;
padding: 40px 0;
/* h1{
    color: ${(props)=>props.color};
    color: ${({color})=>color};
    color: ${({theme})=>theme.colors.header};
} */
&:hover {
    background-color: turquoise;
}
`