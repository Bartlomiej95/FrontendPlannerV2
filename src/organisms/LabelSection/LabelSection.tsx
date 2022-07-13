import {useState} from "react";
import styled from "styled-components";
import { SubHeading } from "../../components/Heading/Heading";
import { Label } from "../../molecules/Label/Label";
import {DepartmentItem} from "../../../../planner/src/department/department.schema";

const Wrapper = styled.section`
     max-width: 300px;
     margin: 0 auto 45px auto;
     padding-top: 75px;
`;

const LabelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 40px auto;
`;


interface Props {
    title: string,
    category: string,
    changeStatus: (isActive: boolean) => void,
    departments: Array<DepartmentItem>,
}



export const LabelSection = ({title, changeStatus, departments}: Props) => {

    const [isActive, setIsActive] = useState(false);

    const handleChangeStatus = () => {
        setIsActive(!isActive);
        changeStatus(isActive);
    }

    return(
        <Wrapper>
            <SubHeading>{title}</SubHeading>
            <LabelWrapper>
                {
                    departments.map(item => (
                        <Label
                            key={item.name}
                            division={item.name}
                            status={isActive}
                            getStatus={() => handleChangeStatus()}
                        />
                    ))
                }
            </LabelWrapper>
        </Wrapper>
    )
}