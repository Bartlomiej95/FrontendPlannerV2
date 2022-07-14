import {UsersConst} from "./constants";

export const authReducer = ( auth = {}, action: any) => {
    switch(action.type){
        case UsersConst.LOGIN_USER:
            return action.payload.user;
        case UsersConst.LOGOUT_USER:
            return {};
        default:
            return auth;
    }
}