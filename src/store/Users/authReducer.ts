import {UsersConst} from "./constants";

export const authReducer = ( auth = [], action: any) => {
    switch(action){
        case UsersConst.LOGIN_USER:
            return action.payload;
        case UsersConst.LOGOUT_USER:
            return action.payload;
        default:
            return auth;
    }
}