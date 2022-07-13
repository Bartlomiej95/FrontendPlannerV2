import {DepartmentItem} from "../../../../planner/src/department/department.schema";
import { DepartmentsConsts } from "./constants";

interface ActionFetchAllDepartments {
    type: DepartmentsConsts.FETCH_ALL_DEPARTMENTS,
    payload: Array<DepartmentItem> | [],
}

interface ActionAddSelected {
    type: DepartmentsConsts.ADD_SELECTED,
    payload: {
        name: string,
        status: boolean,
    }
}

interface ActionAddSelectedFromEdit {
    type: DepartmentsConsts.ADD_SELECTED_FROM_EDIT,
    payload: {
        names: Array<string>,
    }
}

export type ActionsDepartments = ActionFetchAllDepartments | ActionAddSelected
    | ActionAddSelectedFromEdit;
