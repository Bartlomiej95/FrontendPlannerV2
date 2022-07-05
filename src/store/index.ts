import { combineReducers } from 'redux';
import { authReducer as auth } from './Users/authReducer';
import { users } from './Users/reducer';

export const reducers = combineReducers({
    users,
    auth,
})