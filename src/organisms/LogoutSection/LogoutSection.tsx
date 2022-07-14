import styled from "styled-components";
import { SubHeading } from "../../components/Heading/Heading";
import logoutIcon from "../../assets/logoutIcon.svg";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 50px);
    > * {
        margin-top: 15px;
    }
`;

const Img = styled.img`
    display: block;
    /* margin: 100px auto 0 auto; */
    padding-bottom: 20px;
`;

const BackSpan = styled.span`
    color: #0903B0;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
`;

export const LogoutSection = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    const setFarewell = () => {
        // function returning farewell text
        const data = new Date();
        const hours = data.getHours();

        if( hours >= 6 && hours < 13){
            return 'Miłego dnia !';
        } else if( hours >= 13 && hours < 18){
            return 'Miłego popołudnia !';
        } else if( hours >= 18 && hours < 22 ) {
            return 'Miłego wieczoru !';
        } else if( ( hours >= 22 && hours <= 24 ) || ( hours >= 0 && hours < 6 ) ){
            return 'Dobrej nocy ! Lepiej idź już spać';
        } else if( hours < 0 || hours > 24 ){
            return 'Hmm... zaginasz czasoprzestrzeń';
        }
    }

    return(
        <Wrapper>
            <Img src={logoutIcon} alt="ikonka zatwierdzające udane wylogowanie" />
            <SubHeading>{setFarewell()}</SubHeading>
            <p>Zostałeś pomyślnie wylogowany z konta.</p>
            <BackSpan onClick={() => handleClick()}>Wróc do strony głównej</BackSpan>
        </Wrapper>
    )
}