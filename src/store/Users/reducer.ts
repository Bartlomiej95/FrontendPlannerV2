import { UserItem } from "../../../../planner/src/user/user.schema";
import {UsersConst} from "./constants";


export const users = (users: Array<UserItem> | [] = [], action: any) => {
    switch(action.type){
        case UsersConst.FETCH_ALL_USERS:
            return action.payload;
        default:
            return users;
    }
}