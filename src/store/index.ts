import { combineReducers } from 'redux';
import { authReducer as auth } from './Users/authReducer';
import { users } from './Users/reducer';
import { projects } from './Projects/reducer';
import { departments } from './Departments/reducer';

export const reducers = combineReducers({
    users,
    auth,
    projects,
    departments,
})