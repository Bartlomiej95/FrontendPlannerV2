import axios from "axios";
import {UserItem} from "../../../planner/src/user/user.entity";

const domain = 'http://localhost:3000';
axios.defaults.withCredentials = true;

const urlLogin = `${domain}/auth/login`;
const urlUsersAll = `${domain}/user/all`;

type LoginUserData = Omit<UserItem, 'email' | 'password'>

export const loginUser = (loginUserData: LoginUserData) => axios.post(urlLogin, loginUserData);
export const getAllUsers = () => axios.get(urlUsersAll);