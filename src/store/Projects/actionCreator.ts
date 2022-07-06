import {ProjectsConst} from "./constants";
import {ProjectItem} from "../../../../planner/src/project/project.entity";
import {TaskItem} from "../../../../planner/src/task/task.entity";


interface ActionFetchAllProjects {
    type: ProjectsConst.FETCH_ALL_PROJECTS,
    payload: Array<ProjectItem>,
}

interface ActionCreateProject {
    type: ProjectsConst.CREATE_PROJECT,
    payload: ProjectItem,
}

interface ActionGetDetailsProject {
    type: ProjectsConst.GET_DETAILS_PROJECT,
    payload: ProjectItem,
}

interface ActionEditProject {
    type: ProjectsConst.EDIT_PROJECT,
    payload: {
        data: ProjectItem,
        id: string,
    }
}

interface ActionAddTaskToProject {
    type: ProjectsConst.ADD_TASK_TO_PROJECT,
    payload: {
        idProject: string,
        task: TaskItem,
    }
}

interface ActionGetProjectsForLoggedUser {
    type: ProjectsConst.GET_PROJECTS_FOR_LOGGED_USER,
    payload: Array<ProjectItem>
}

export type ActionsProjects = ActionFetchAllProjects
    | ActionCreateProject | ActionGetDetailsProject
    | ActionEditProject | ActionAddTaskToProject | ActionGetProjectsForLoggedUser
