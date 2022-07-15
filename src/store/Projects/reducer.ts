import {ProjectsConst} from "./constants";
import {ProjectItem} from "../../../../planner/src/project/project.schema";
import {ActionsProjects} from "./actionCreator";


export interface ProjectsState {
    projects: Array<ProjectItem>,
    detailsProjects: ProjectItem | {},
}

const initialState: ProjectsState = {
    projects: [],
    detailsProjects: {},
}

export const projects = (state: ProjectsState = initialState, action: ActionsProjects) => {
    switch(action.type){
        case ProjectsConst.FETCH_ALL_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            }
        case ProjectsConst.GET_PROJECTS_FOR_LOGGED_USER:
            return {
                ...state,
                projects: action.payload,
            }
        case ProjectsConst.GET_DETAILS_PROJECT:
            return {
                ...state,
                detailsProjects: action.payload
            }
        default:
            return initialState;
    }
}