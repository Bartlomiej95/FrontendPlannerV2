import {UserItem} from "../../../../planner/src/user/user.schema";
import {UsersConst} from "./constants";

type UserLoginData = Pick<UserItem, "email" | "password">

interface ActionLoginUser {
    type: UsersConst,
    payload: {
        data: UserLoginData,
    }
}

export type ActionsUsers = ActionLoginUser;