import { UserItem } from "../../../../planner/src/user/user.schema";
import {UsersConst} from "./constants";


export const users = (users: Array<UserItem> | [] = [], action: any) => {
    switch(action.type){
        case UsersConst.FETCH_ALL_USERS:
            return action.payload;
        case UsersConst.CREATE_USER:
            return [...users, action.payload];
        default:
            return users;
    }
}