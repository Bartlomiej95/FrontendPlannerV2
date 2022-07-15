import {UserItem} from "../../../../planner/src/user/user.schema";
import * as api from '../../api/index';
import {UsersConst} from "./constants";
import {Dispatch} from "redux";
import {ActionsUsers} from "./actionCreator";
import {RegisterDto} from "../../../../planner/src/user/dto/register.dto";

type LoginUserData = Omit<UserItem, 'email' | 'password'>

export const loginUser = (userData: LoginUserData) => async (dispatch: Dispatch<ActionsUsers>): Promise<void> => {
    try {
        const { data } = await api.loginUser(userData);
        console.log(data);
        dispatch({ type: UsersConst.LOGIN_USER, payload: data});

    } catch (error) {
        console.log(error);
    }
}

export const fetchAllUsers = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getAllUsers();
        console.log(data);
        dispatch({ type: UsersConst.FETCH_ALL_USERS, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const registerUser = (newUser: RegisterDto, navigate: any) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.registerUser(newUser);
        console.log(newUser);
        dispatch({ type: UsersConst.CREATE_USER, payload: data});
        navigate('/');

    } catch (e) {
        console.log(e)
    }
}

export const logoutUser = (navigate: any) => async (dispatch: Dispatch<ActionsUsers>) => {
    try {
        const { data } = await api.logoutUser();
        dispatch({ type: UsersConst.LOGOUT_USER, payload: data});
        navigate('/logout');
    } catch (error) {

    }
}

export const getAllUsersForProject = (projectId: string) => async (dispatch: Dispatch<ActionsUsers>) => {
    try {
        const { data } = await api.getAllUsersForProject(projectId);
        dispatch({ type: UsersConst.FETCH_USERS_FOR_PROJECT, payload: data});
    } catch (e) {
        console.log(e);
    }
}