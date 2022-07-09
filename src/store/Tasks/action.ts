import {Dispatch} from "redux";
import * as api from '../../api/index';
import {TasksConst} from "./constants";

export const getTasksForUser = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const data = await api.getTasksForUser(userId);
        dispatch({ type: TasksConst.GET_TASKS_FOR_USER, payload: data});
    } catch (e) {
        console.error(e);
    }
}