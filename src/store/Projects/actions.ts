import {Dispatch} from "redux";
import * as api from '../../api/index';
import {ProjectsConst} from "./constants";

export const getProjectsForLoggedUser = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getProjectsForLoggedUser(userId);
        console.log(data);
        dispatch({ type: ProjectsConst.GET_PROJECTS_FOR_LOGGED_USER, payload: data});
    } catch (e) {
        console.error(e);
    }
}