import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {SubHeading} from "../../components/Heading/Heading";
import {Paragraph} from "../../components/Paragraph/Paragraph";
import {MainSectionType} from "../../utils/enums/main-section";
import {InnerMainSectionNav} from "../../molecules/InnerMainSectionNav/InnerMainSectionNav";
import {getProjectsForLoggedUser} from "../../store/Projects/actions";
import {ProjectItem} from "../../../../planner/src/project/project.entity";
import {ProjectCard} from "../../molecules/ProjectCard/ProjectCard";

const Wrapper = styled.main`
    min-height: 100vh;
    background-color: #F9FAFF;
    z-index: -2; 
`;

const WrapperProjectCard = styled.div`
    width: 100%;
    margin-top: 42px;
`;

const WrapperHelpdeskInfo = styled.div`
    width: 50%;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`;

const ParagraphHelpdesk = styled(Paragraph)`
    margin-top: 14px;
    color: black;
`;

const SpanHelpdesk = styled.span`
    font-weight: 700;
    cursor: pointer;
`;

const SubHeadingHelpdesk = styled(SubHeading)`
    color: black;
`;

export const MainSection = () => {

    const auth = useSelector((state: any) => state.auth);
    const [typeOfMainSection, setTypeOfMainSection] = useState(MainSectionType.Project);
    const dispatch = useDispatch();
    const projects = useSelector((state: any) => state.projects.projects);

    useEffect(() => {
        if(typeOfMainSection === MainSectionType.ProjectManager){
            dispatch(getProjectsForLoggedUser(auth.id));
        }
    }, [typeOfMainSection])

    return(
        <Wrapper>
            <InnerMainSectionNav
                typeFn={ (typeOfMainSection: MainSectionType) => setTypeOfMainSection(typeOfMainSection)}
                valueOfType={typeOfMainSection}
                userRole={auth.role}
            />
            {
                typeOfMainSection === MainSectionType.Project && (
                    <WrapperProjectCard>
                        {
                            projects.map( (project: ProjectItem) =>
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                />
                            )
                        }
                    </WrapperProjectCard>
                )
            }
            <WrapperHelpdeskInfo>
                <SubHeadingHelpdesk >Masz problem z obsługą planera?</SubHeadingHelpdesk>
                <ParagraphHelpdesk > <SpanHelpdesk>Zgłoś się</SpanHelpdesk> do naszego helpdesku</ParagraphHelpdesk>
            </WrapperHelpdeskInfo>
        </Wrapper>
    )
}