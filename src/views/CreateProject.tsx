import styled from "styled-components";
import { Heading, SubHeading } from "../components/Heading/Heading";
import { Input } from "../components/Input/Input";
import { TextArea } from "../components/TextArea/TextArea";
import { Header } from "../organisms/Header/Header";
import {useLocation, useNavigate} from "react-router-dom";
import {ProjectItem} from "../../../planner/src/project/project.schema";
import {SyntheticEvent, useEffect, useState} from "react";
import { Button } from "../components/Button/Button";
import {LabelSection} from "../organisms/LabelSection/LabelSection";
import {useDispatch, useSelector} from "react-redux";
import { fetchAllDepartments } from "../store/Departments/actions";
import {Footer} from "../organisms/Footer/Footer";
import {fetchAllUsers} from "../store/Users/actions";
import {DepartmentItem} from "../../../planner/src/department/department.schema";
import {UserItem} from "../../../planner/src/user/user.schema";
import { PersonToProject } from "../molecules/PersonToProject/PersonToProject";
import {createNewProject} from "../store/Projects/actions";


const CreateProjectFormDiv = styled.div`
    max-width: 275px;
    margin: 50px auto 0 auto;
`;

const Form = styled.form`
    margin-top: 51px;
`;

const CreateBtn = styled(Button)`
    margin-top: 40px;
    margin-bottom: 40px;
`;

const AssignmentSection = styled.section`
    max-width: 275px;
    margin: 0 auto;
`;

export type InitialProjectData = Pick<ProjectItem, 'customer' | 'deadline' | 'description' | 'duration' | 'isFinished' | 'projectValue' | 'title'>

const initialProjectData: InitialProjectData = {
    customer: "",
    deadline: new Date(),
    description: "",
    duration: 0,
    isFinished: false,
    projectValue: 0,
    title: "",
}

interface LocationState {
    state: {
        isEdited: boolean,
    }
}

export const CreateProject = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const isEdited: boolean  = (location as LocationState).state.isEdited;
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState<InitialProjectData>(initialProjectData);
    const [status, setStatus] = useState(false);
    const [ idUsersAssignToProject, setIdUsersAssignToProject] = useState<Array<string>>([]);
    const departments = useSelector((state: any) => state.departments);
    const users = useSelector((state: any) => state.users);


    useEffect(() => {
        dispatch(fetchAllDepartments());
        dispatch(fetchAllUsers());

    },[])

    const handleChange = (e: SyntheticEvent) => {
        const target = e.target as HTMLTextAreaElement ;

        e.preventDefault();
        const name = target.name;
        setProjectData({
            ...projectData,
            [name]: target.value,
        })
    }

    const handleAssignIdUserToProject = (id: string) => {
        console.log(id);
        // Firstly we are checking if array is empty - maybe we already have a some users id ( in edition case )
        if(typeof idUsersAssignToProject !== "undefined" && idUsersAssignToProject.length > 0) {
            // Now we have to check if we not clicked on the previously selected user
            // We secure before situation that we select one user twice
            const foundExistingId = idUsersAssignToProject.includes(id);

            if (foundExistingId) {
                // if clicked user was previously selected, we have to remove him from project
                const filteredArray = idUsersAssignToProject.filter(item => item !== id);

                return setIdUsersAssignToProject(filteredArray);
            }
            return setIdUsersAssignToProject([...idUsersAssignToProject, id]);
        }
        // If we have not any select user before we can just add new id
        return setIdUsersAssignToProject([id]);
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            console.log(idUsersAssignToProject);
            dispatch(createNewProject(projectData, idUsersAssignToProject, navigate));
        } catch (e) {

        }

    }

    const selectedDepartmentsNames = departments.map((dep: DepartmentItem )=> {
        if(dep.isSelected){
            return dep.name
        }
    }).filter(Boolean) // I want remove every "undefined" from the array

    const usersFromSelectedDepartments = users.filter((user: UserItem) => {
        if(user.department){
            if(selectedDepartmentsNames.includes(user.department.name)){
                return user;
            }
        }
    });

    return(
        <>
            <Header />
            <CreateProjectFormDiv>
                <Heading>
                    {isEdited ? ('name') : ("Nowy projekt")}
                </Heading>
                <Form id="project-form" onSubmit={(e) => handleSubmit(e)}>
                    <Input placeholder="Nazwa projektu" type="string" name="title" onChange={ (e) => handleChange(e) } value={projectData.title} />
                    <Input placeholder="Klient" type="string" name="customer" onChange={ (e) => handleChange(e)} value={projectData.customer} />
                    <Input placeholder="Termin oddania projektu" type="date" name="deadline" onChange={ (e) => handleChange(e) } value={projectData.deadline} />
                    <Input placeholder="Ilość godzin na projekt" type="number" name="duration" onChange={ (e) => handleChange(e) } value={projectData.duration} />
                    <Input placeholder="Wartość projektu w PLN" type="number" name="projectValue" onChange={ (e) => handleChange(e) } value={projectData.projectValue} />

                    <SubHeading>Krótki opis projektu</SubHeading>
                    <TextArea placeholder="Treść wiadomości" name="description" onChange={(e) => handleChange(e)} value={projectData.description} />
                </Form>
            </CreateProjectFormDiv>
            <LabelSection
                title="Wybierz dział odpowiedzialny za projekt"
                category="department"
                changeStatus={() => setStatus(!status) }
                departments={departments}
            />

            <AssignmentSection>
                <SubHeading>Przypisz osoby <br /> pracujące przy projekcie</SubHeading>
                {
                    usersFromSelectedDepartments.map((user: UserItem) => {
                        return(
                            <PersonToProject
                                key={user._id}
                                id={user._id}
                                position={user.position}
                                name={user.name}
                                surname={user.surname}
                                assignUserToProject={ () => handleAssignIdUserToProject(user._id)}
                                isFromEdition={isEdited}
                            />
                        )
                    })
                }
            </AssignmentSection>
            <CreateBtn form="project-form">{ isEdited ? 'Edytuj' : 'Utwórz projekt' } </CreateBtn>
            <Footer />
        </>
    )
}