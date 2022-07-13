import { DepartmentsConsts } from "./constants";
import * as api from '../../api/index';
import { Dispatch } from "redux";
import { ActionsDepartments } from "./actionCreator";

export const fetchAllDepartments = () => async (dispatch: Dispatch<ActionsDepartments>) => {
    try {
        const { data } = await api.fetchAllDepartments();

        dispatch({ type: DepartmentsConsts.FETCH_ALL_DEPARTMENTS, payload: data});
    } catch (error) {
        console.log(error);
    }
}

//active - oznacza, że dział został wybrany podczas tworzenia projektu do jego realizacji

export const addSelectedDepartment = (name: string, status: boolean) => {
    try {
        return{
            type: DepartmentsConsts.ADD_SELECTED,
            payload: {
                name,
                status
            }
        }

    } catch (error) {
        console.log(error);
    }
}

export const addSelectedDepartmentFromEdit = (namesOfDepartments: Array<string>) => {
    try {
        const names = [...namesOfDepartments];
        return{
            type: DepartmentsConsts.ADD_SELECTED_FROM_EDIT,
            payload: {
                names,
            }
        }

    } catch (error) {
        console.log(error);
    }
}