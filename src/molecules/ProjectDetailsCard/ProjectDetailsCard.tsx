import styled from "styled-components";
import { SubHeading } from "../../components/Heading/Heading";
import {ProjectItem} from "../../../../planner/src/project/project.schema";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getAllUsersForProject } from "../../store/Users/actions";

const Wrapper = styled.div`
    position: relative;
    width: 315px;
    min-height: 100px;
    padding: 13px 42px;
    margin: 0 auto;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    margin-bottom: 25px;
    background-color: #FFF;
`;


const ProjectCardHeading = styled(SubHeading)`
    text-align: left;
    margin-bottom: 10px;
`;

const WrapperLinkInCard = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;

const LinkInCard = styled(Paragraph)`
    color: #372FFF;
    font-weight: 600;
    cursor: pointer;
`;

type Props = Pick<ProjectItem, 'title' | 'description' | 'id' | 'customer' | 'users' | 'projectValue' | 'deadline' | 'duration' >


export const ProjectDetailsCard = ({ title, description, id, customer, users, projectValue, deadline, duration }: Props) => {

    const navigate = useNavigate();

    return(
        <>
            <Wrapper>
                <ProjectCardHeading>{title}</ProjectCardHeading>
                <Paragraph> {description} </Paragraph>

                        <WrapperLinkInCard>
                            <LinkInCard onClick={() => navigate("/project/add", { state: {isEdited: true, id}})}>Edytuj</LinkInCard>
                            <LinkInCard onClick={()=> navigate("/task/add", {
                                state: {
                                    projectId: id,
                                    projectUsers: users,
                                    title,
                                    duration,

                                }})}>Przydziel zadania</LinkInCard>
                            <LinkInCard>Szczegóły</LinkInCard>
                        </WrapperLinkInCard>
            </Wrapper>
        </>
    )
}