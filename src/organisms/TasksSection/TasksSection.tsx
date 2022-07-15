import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import {useSelector} from "react-redux";

const TaskInput = styled(Input)`
    margin-bottom: 30px;
`;

export const TasksSection = () =>{

    const tasks = useSelector((state :any) => state.tasks.tasks)

    return(
        <>
            <TaskInput placeholder="Wpisz nazwę zadania" value={searchTask} onChange={(e) => handleChange(e) } />
        </>
    )
}