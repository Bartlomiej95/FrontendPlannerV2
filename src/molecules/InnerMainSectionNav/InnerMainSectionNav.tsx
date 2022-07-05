import {useState} from "react";
import styled, {css} from "styled-components";
import {SubHeading} from "../../components/Heading/Heading";
import {MainSectionType} from "../../utils/enums/main-section";
import leftArrow from "../../assets/leftArrayNavbar.svg";
import rightArrow from "../../assets/rightArrayNavbar.svg";
import {userRole} from "../../../../planner/src/utils/enums/userRole";


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 315px;
    margin: 0 auto;
`;

const WrapperNavbar = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 283px;
    margin: 0 auto;
    overflow: hidden;
`;

const NavSubHeading = styled(SubHeading)<{ readonly active: boolean}>`
    font-size: 12px;
    color: #0903B0;
    ${({ active }) => active && css`
        color: white;
    `}
`;

const DivElemNavbar = styled.div<{ readonly active: boolean; readonly shift: number}>`
    width: 90px;
    min-width: 90px;
    height: 43px;
    box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.10);
    border-radius: 5px;
    margin: 5px 5px 5px 0;
    transform: translateX(calc( -95px * ${({ shift }) => shift} ));   
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    ${({ active }) => active &&
    css`
            background-color: #0903B0;
            color: white;
        `}
`;

const ArrowRight = styled.img`
    display: block;
    cursor: pointer;
`;

const LeftArrow = styled.img`
    display: block;
    cursor: pointer;
`;

interface Props {
    valueOfType: MainSectionType,
    typeFn: Function,
    userRole: userRole,
}

export const InnerMainSectionNav = ({ typeFn, valueOfType, userRole}: Props) => {

    // ustawienia dla arrows 0 - widzimy pierwszy kafelek - blokujemy możliwość dalszego przesuwania w prawo  [1][2][3]>
    // ustawienia dla arrows 1 - <[2][3][4]
    const [arrowOptions, setArrowOptions] = useState(0);

    return(
        <Wrapper>
            { arrowOptions > 0 && <LeftArrow src={leftArrow} onClick={ () => setArrowOptions(prev => prev = prev - 1) } /> }
            <WrapperNavbar>
                <DivElemNavbar active={ valueOfType === MainSectionType.Project } onClick={() => typeFn(MainSectionType.Project)} shift={arrowOptions}>
                    <NavSubHeading active ={ valueOfType === MainSectionType.Project} >Projekty</NavSubHeading>
                </DivElemNavbar>
                <DivElemNavbar active={ valueOfType === MainSectionType.Archives } onClick={() => typeFn(MainSectionType.Archives)} shift={arrowOptions}>
                    <NavSubHeading active ={ valueOfType === MainSectionType.Archives} >Archiwum Projektów</NavSubHeading>
                </DivElemNavbar>
                {
                    (userRole === "ADMIN" || userRole === "FOUNDER") && (
                        <DivElemNavbar active={ valueOfType === MainSectionType.ProjectManager } onClick={() => typeFn(MainSectionType.ProjectManager)} shift={arrowOptions}>
                            <NavSubHeading active ={ valueOfType === MainSectionType.ProjectManager} >Menedżer Projektów</NavSubHeading>
                        </DivElemNavbar>
                    )
                }
                <DivElemNavbar active={ valueOfType === MainSectionType.Tasks } onClick={() => typeFn(MainSectionType.Tasks)} shift={arrowOptions}>
                    <NavSubHeading active={ valueOfType === MainSectionType.Tasks } >Lista zadań</NavSubHeading>
                </DivElemNavbar>
                {
                    userRole === "FOUNDER" && (
                        <DivElemNavbar active={ valueOfType === MainSectionType.Data } onClick={() => typeFn(MainSectionType.Data)} shift={arrowOptions}>
                            <NavSubHeading active={ valueOfType === MainSectionType.Data } >Dane firmy</NavSubHeading>
                        </DivElemNavbar>
                    )
                }
            </WrapperNavbar>
            { arrowOptions < 2 && <ArrowRight src={rightArrow} onClick={() => setArrowOptions(prev => prev = prev + 1)} /> }
        </Wrapper>
    )
}