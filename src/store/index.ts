import { combineReducers } from 'redux';
import { authReducer } from './Users/authReducer';
import { users } from './Users/reducer';

export const reducers = combineReducers({
    users,
    authReducer,
})