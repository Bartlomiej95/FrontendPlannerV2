import { useState } from "react";
import styled, { css } from "styled-components";
import menuIcon from '../../assets/menuIcon.svg';
import { Button } from "../../components/Button/Button";
import { HiddenMenu } from "../HiddenMenu/HiddenMenu";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 33px;
    background-color: #F9FAFF;
`;

const Logo = styled.h2`
  font-size: ${({ theme }) => theme.SubHeading.mobileFontSize};
  font-weight: bold;
  display: block;
  color: black;
`;


const IconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

const Icon = styled.div<{ readonly bcgIcon :string}>`
    width: 30px;
    height: 30px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.16);
    border-radius: 50%;
    margin-left: 30px;
    cursor: pointer;
    background-color: white;
    ${({ bcgIcon }) => bcgIcon && css`
    
        background-image: url(${bcgIcon});
        background-position: center;
        background-repeat: no-repeat;
    `}
`;



export const Header = () => {
    const [showHiddenMenu, setShowHiddenMenu] = useState(false);
    return(
        <>
            {
                !showHiddenMenu && (
                    <Wrapper>
                        <Logo>Planner</Logo>
                        <IconsDiv>
                            <Icon bcgIcon={menuIcon} onClick={() => setShowHiddenMenu(prev => !prev)} />
                        </IconsDiv>
                    </Wrapper>
                )
            }
            <HiddenMenu isActive={showHiddenMenu} exitHiddenMenu={() => setShowHiddenMenu(false)}/>
        </>
    );
}