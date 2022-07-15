import {Dispatch} from "redux";
import * as api from '../../api/index';
import {ProjectsConst} from "./constants";
import {InitialProjectData} from "../../views/CreateProject";
import {ProjectItem} from "../../../../planner/src/project/project.schema";

export const getProjectsForLoggedUser = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getProjectsForLoggedUser(userId);
        console.log(data);
        dispatch({ type: ProjectsConst.GET_PROJECTS_FOR_LOGGED_USER, payload: data});
    } catch (e) {
        console.error(e);
    }
}

export const getAllProjects = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getAllProjects();
        dispatch({ type: ProjectsConst.FETCH_ALL_PROJECTS, payload: data })
    } catch (e) {
        console.error(e)
    }
}

export const createNewProject = (projectData: ProjectItem, usersId: string, selectedDepartmentsNames: [string], navigate: any) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createNewProject(projectData, usersId, selectedDepartmentsNames);
        navigate('/user');
        console.log(data);
    }catch (e) {
        console.error(e);
    }
}

export const getProject = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getProject(id);
        dispatch({ type: ProjectsConst.GET_DETAILS_PROJECT, payload: data})
    } catch(e){
        console.error(e)
    }
}