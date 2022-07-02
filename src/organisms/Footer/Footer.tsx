import styled from "styled-components";
import {SubHeading} from "../../components/Heading/Heading";

const Wrapper = styled.footer`
    height: 75px;
    background-color: #EFF1F5;
`;

const FooterLogo = styled(SubHeading)`
    margin-left: 34px;
    padding: 20px 0;
    color: black;
`;

export const Footer = () => {
    return(
        <Wrapper>
            <FooterLogo >Planner</FooterLogo>
        </Wrapper>
    )
}