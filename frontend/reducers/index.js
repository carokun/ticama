import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import ViewedReducer from './ViewedReducer';

export default combineReducers({
    user: UserReducer,
    viewed: ViewedReducer
});
