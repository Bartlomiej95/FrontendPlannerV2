import styled from "styled-components";
import {Heading, SubHeading } from "../components/Heading/Heading";
import { Input } from "../components/Input/Input";
import { TextArea } from "../components/TextArea/TextArea";
import { PersonToProject } from "../molecules/PersonToProject/PersonToProject";
import { Footer } from "../organisms/Footer/Footer";
import {Header} from "../organisms/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { createNewTask } from "../store/Tasks/action";
import {UserItem} from "../../../planner/src/user/user.schema";
import { Paragraph } from "../components/Paragraph/Paragraph";
import {Button} from "../components/Button/Button";

const AssignmentSection = styled.section`
    max-width: 275px;
    margin: 0 auto;
`;

const FormSection = styled.section`
    max-width: 275px;
    margin: 50px auto 0px auto;
`;

const ConfirmBtn = styled(Button)`
    margin: 40px auto;
`;

const ParagraphNote = styled(Paragraph)`
    color: #0903B0;
    text-align: center;
`;

const ParagraphRemark = styled(Paragraph)`
    color: red;
    text-align: center;
    font-weight: 700;
`;

const SpanNote = styled.span`
    font-weight: 700;
`;

const SubHeadingForm = styled(SubHeading)`
    margin: 30px auto;
`;

const initialTaskData = {
    title: '',
    brief: '',
    timeForTheTask: 0,
    guidelines: '',
    users: [''],
    isFinish: false,
    taskActivationTime: 0,
    isActive: false,
    _id: '',
}

export const TasksToProject = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { projectId, projectUsers, title, duration } = location.state;
    const [taskData, setTaskData] = useState(initialTaskData);
    const [idUserAssign, setIdUserAssign] = useState<Array<string>>([]);
    const [changeDetektor, setChangeDetektor] = useState(false);
    const [ remainingProjectTime, setRemainingProjectTime ] = useState(Number(duration)*60);
    const users = useSelector((state: any) => state.users);

    useEffect(() => {
        setTaskData({
            ...taskData,

        })
    }, [])

    const handleChange = (e :React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLTextAreaElement ;

        let remainingTime = Number(duration) * 60 - Number(target.value);

        if(target.name === "time"){
            setRemainingProjectTime(Number((remainingTime).toFixed(2)));
        }
        setTaskData({
            ...taskData,
            [target.name]: target.value,
        })
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        try {
            e.preventDefault();
            dispatch(createNewTask(taskData, projectId, navigate));
            console.log(taskData);
        } catch (error) {
            console.log(error);
        }
    }

    const handleAssignIdUserToProject = (id :string, department :string) => {
        // sprawdzamy czy jaki?? u??ytkownik nie zosta?? wcze??niej do zadania przypisany
        if(typeof idUserAssign !== "undefined" && idUserAssign.length > 0){
            // je??li kto?? ju?? jest to sprawdzamy czy czasami przed chwil?? klikni??ty pracownik, to nie jest ten, kt??ry zosta?? ju?? wcze??niej przypisany do tego projektu
            // m??wi??c pro??ciej czy pracownik nie zosta?? klini??ty drugi raz -> czyli odklini??ty
            const foundExistingId = idUserAssign.includes(id);

            if(foundExistingId){
                // je??li istnieje, to musimy go usun???? z tablicy
                const filteredArray = idUserAssign.filter(item => item !== id );

                setTaskData({
                    ...taskData,
                    users: filteredArray
                })
                return setIdUserAssign(filteredArray) //zwracamy tablic?? bez usuni??tego id

            }
        }
        setIdUserAssign([
            ...idUserAssign,
            id
        ])
        setTaskData({
            ...taskData,
            users: [...idUserAssign, id]
        })

        setChangeDetektor(!changeDetektor);
    }

    const usersInProject = users.filter((user: UserItem) => projectUsers.includes(user._id));

    return(
        <>
            <Header />
            <Heading>{title}</Heading>
            <AssignmentSection>
                <SubHeading>Przydziel zadania do projektu</SubHeading>
                {
                    usersInProject.map((user: UserItem) => (
                        <PersonToProject
                            key={user._id}
                            id={user._id}
                            name={user.name}
                            surname={user.surname}
                            position={user.position}
                            assignUserToProject={ () => handleAssignIdUserToProject(user._id)}
                            isFromEdition={false}
                        />
                    ))
                }
            </AssignmentSection>
            <FormSection>
                <form id="task-form" onSubmit={(e) => handleSubmit(e)}>
                    <Input placeholder="Nazwa zadania" type="string" name="title" value={taskData.title} onChange={(e) => handleChange(e)} />
                    <Input placeholder="Skr??cony opis zadania" type="string" name="brief" value={taskData.brief} onChange={(e) => handleChange(e)} />
                    <Input placeholder="Podaj czas pracy w minutach" type="number" name="timeForTheTask" value={taskData.timeForTheTask} onChange={(e) => handleChange(e)} />
                    {
                        remainingProjectTime < 0 ? (
                            <ParagraphRemark> Przekroczono limit czasu przeznaczonego na projekt!</ParagraphRemark>
                        ) : (
                            <ParagraphNote><SpanNote>Uwaga!</SpanNote> W ramach tego projektu <br/>zosta??o do zagospodarowania <SpanNote>{Math.floor(remainingProjectTime/60)} godzin {(remainingProjectTime % 60).toFixed(0)} minut</SpanNote></ParagraphNote>
                        )
                    }
                    <SubHeadingForm>Opisz zakres pracy<br /> w ramach zadania</SubHeadingForm>
                    <TextArea placeholder="Tre???? wiadomo??ci" name="guidelines" value={taskData.guidelines} onChange={(e) => handleChange(e)} />

                    <ConfirmBtn form="task-form">Zatwierd?? zadanie</ConfirmBtn>
                </form>
            </FormSection>
            <Footer/>

        </>
    )
}