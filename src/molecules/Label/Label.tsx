import { useState } from "react";
import styled, { css } from "styled-components";
import {addActiveDepartment, addSelectedDepartment} from "../../store/Departments/actions";
import {useDispatch} from "react-redux";


const Wrapper = styled.div<{ readonly isClicked: boolean}>`
  height: 24px;
  background-color: #D1D1D1;
  padding: 7px 14px;
  border-radius: 15px;
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;
  ${({ isClicked }) => isClicked && css`
        background-color: #F37B01;
    `}
`;

const LabelName = styled.p`
    font-size: 10px;
    line-height: 10px;
    color: white;
    font-weight: 600;
`;

interface Props {
    division: string,
    status: boolean,
    getStatus: () => void,
}

export const Label = ({ division, status, getStatus}: Props) => {

    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

    const getActiveStatus = () => {
        setIsActive(isActive => !isActive);
        dispatch(addSelectedDepartment(division, !isActive));
        getStatus();
    }

    return(
        <Wrapper isClicked={isActive} onClick={() => getActiveStatus() }>
            <LabelName>{division}</LabelName>
        </Wrapper>
    )
}