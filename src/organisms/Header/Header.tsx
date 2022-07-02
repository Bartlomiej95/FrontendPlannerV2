import styled, { css } from "styled-components";
import menuIcon from '../../assets/menuIcon.svg';

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
    return(
        <>
            <Wrapper>
                <h2>Planner</h2>
                <Icon bcgIcon={menuIcon}  />
            </Wrapper>
        </>
    );
}