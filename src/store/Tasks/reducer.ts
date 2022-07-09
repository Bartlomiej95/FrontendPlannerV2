import {TaskItem} from "../../../../planner/src/task/task.entity";
import {TasksConst} from "./constants";

export const tasks = (tasks: TaskItem, action: any) => {
    switch (action.type){
        case TasksConst.GET_TASKS_FOR_USER:
            return action.payload;
        default:
            return tasks;
    }
}