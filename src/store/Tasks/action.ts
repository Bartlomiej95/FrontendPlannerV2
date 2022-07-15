import {Dispatch} from "redux";
import * as api from '../../api/index';
import {TasksConst} from "./constants";
import {TaskItem} from "../../../../planner/src/task/task.schema";

export const getTasksForUser = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const data = await api.getTasksForUser(userId);
        dispatch({ type: TasksConst.GET_TASKS_FOR_USER, payload: data});
    } catch (e) {
        console.error(e);
    }
}

export const createNewTask = (taskData: TaskItem, projectId: string, navigate: any) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createNewTask(taskData, projectId)
        dispatch({ type: TasksConst.CREATE_NEW_TASK, payload: data})
        navigate('/user');
    } catch (e) {
        console.log(e);
    }
}