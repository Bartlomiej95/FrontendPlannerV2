import axios from "axios";
import {UserItem} from "../../../planner/src/user/user.schema";
import {ProjectItem} from "../../../planner/src/project/project.schema";
import {RegisterDto} from "../../../planner/src/user/dto/register.dto";

const domain = 'http://localhost:3000';
axios.defaults.withCredentials = true;

const urlAuth = `${domain}/auth`;
const urlUsersAll = `${domain}/user/all`;
const urlProjects = `${domain}/project`;
const urlTasks = `${domain}/task`;
const urlDepartments = `${domain}/department`;
const urlUser = `${domain}/user`;

type LoginUserData = Omit<UserItem, 'email' | 'password'>

export const loginUser = (loginUserData: LoginUserData) => axios.post(`${urlAuth}/login`, loginUserData);
export const getAllUsers = () => axios.get(urlUsersAll);
export const getAllProjects = () => axios.get(urlProjects);
export const fetchAllDepartments = () => axios.get(urlDepartments);
export const getProjectsForLoggedUser = (userId: string) => axios.get(`${urlProjects}/${userId}`)
export const getTasksForUser = (userId: string) => axios.get(`${urlTasks}/`);
export const createNewProject = (projectData: ProjectItem, usersId: string) => axios.post(`${urlProjects}/add`, { projectData, usersId });
export const registerUser = (newUser: RegisterDto) => axios.post(`${urlUser}/register`, newUser );
export const logoutUser = () => axios.get(`${domain}/logout`);