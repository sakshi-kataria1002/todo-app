import { combineReducers } from 'redux';
import userReaducer from './user/user.reducer';

export const rootReducer = combineReducers({
    userState: userReaducer
})
