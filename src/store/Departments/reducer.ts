import { ActionsDepartments } from "./actionCreator";
import { DepartmentsConsts } from "./constants";
import {DepartmentItem} from "../../../../planner/src/department/department.schema";


export const departments = (departments: Array<DepartmentItem> | [] = [] , action: ActionsDepartments) => {
    switch(action.type){
        case DepartmentsConsts.FETCH_ALL_DEPARTMENTS:
            return [...action.payload].map(item => {
                item.isSelected = false;
                return item;
            });
        case DepartmentsConsts.ADD_SELECTED:
            return [...departments].map(item => {
                if(item.name === action.payload.name){
                    item.isSelected = action.payload.status;
                }
                return item;
            });;

        case DepartmentsConsts.ADD_SELECTED_FROM_EDIT:
            return [...departments].map(item => {
                if(action.payload.names.includes(item.name)){
                    item.isSelected = true;
                }
                return item;
            });
        default:
            return departments;
    }
}