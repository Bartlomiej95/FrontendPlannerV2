import axios from "axios";
import {UserItem} from "../../../planner/src/user/user.schema";
import {ProjectItem} from "../../../planner/src/project/project.schema";

const domain = 'http://localhost:3000';
axios.defaults.withCredentials = true;

const urlLogin = `${domain}/auth/login`;
const urlUsersAll = `${domain}/user/all`;
const urlProjects = `${domain}/project`;
const urlTasks = `${domain}/task`;
const urlDepartments = `${domain}/department`;

type LoginUserData = Omit<UserItem, 'email' | 'password'>

export const loginUser = (loginUserData: LoginUserData) => axios.post(urlLogin, loginUserData);
export const getAllUsers = () => axios.get(urlUsersAll);
export const getAllProjects = () => axios.get(urlProjects);
export const fetchAllDepartments = () => axios.get(urlDepartments);
export const getProjectsForLoggedUser = (userId: string) => axios.get(`${urlProjects}/${userId}`)
export const getTasksForUser = (userId: string) => axios.get(`${urlTasks}/`);
export const createNewProject = (projectData: ProjectItem, usersId: string) => axios.post(`${urlProjects}/add`, { projectData, usersId })