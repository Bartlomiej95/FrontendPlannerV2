import {SyntheticEvent, useState} from "react";
import styled from "styled-components";
import {Heading, SubHeading} from "../../components/Heading/Heading";
import {Button} from "../../components/Button/Button";
import { data } from "../../data/staticData";
import { AboutPlannerCard } from "../../molecules/AboutPlannerCard/AboutPlannerCard";

const Wrapper = styled.section`
    width: 100vw;
    min-height: 800px;
    padding-top: 150px;
    margin: 0 auto 50px auto;
`;

const LoginButton = styled(Button)`
    margin: 50px auto 110px auto;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.16);
    border: 0px;
`;

const CardNavigation = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0 auto;
`;

const CardWrapper = styled.div<{ readonly activeId: number }>`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 335px;
    overflow: hidden;
    margin: 0 auto;  
    @media(min-width: 600px){
        width: 370px;
    }
`;

const SingleNav = styled.div<{ readonly isActive: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #120D45;
    background-color: ${({ isActive }) => isActive === true ? 'black' : 'white'};
    margin-right: 10px;
    :hover{
        cursor: pointer;
    }
`;

export const Banner = () => {
    // property which save information about id active nav ( nav - i mean active navigation circle )
    const [idActiveNav, setIdActiveNav] = useState(1);

    const handleClick = (e: SyntheticEvent, id: number) => {
        e.preventDefault();
        setIdActiveNav(id);
    }

    const checkActive = (idNav: number) => {
        // we are checking if id clicked nav is the same as id actual active nav
        // we are changing status of property isActive
        if(idNav === idActiveNav){
            return true;
        }
        return false;
    }

    return(
    <Wrapper>
        <Heading>Zaloguj się lub utwórz konto</Heading>
        <LoginButton>Zaloguj się </LoginButton>
        <SubHeading>Poznaj nasze rozwiązanie</SubHeading>
        <CardWrapper activeId={idActiveNav}>
            {
                data.solutions.map(item => (
                    <AboutPlannerCard
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        activeId={idActiveNav}
                    />
                ))
            }
        </CardWrapper>
        <CardNavigation >
            {
                data.solutions.map(item => (
                    <SingleNav
                        key={item.id}
                        onClick={(e) => handleClick(e, item.id)}
                        isActive={checkActive(item.id)}
                    />
                ))
            }
        </CardNavigation>

    </Wrapper>
    );
}