import { combineReducers } from 'redux';

// Reducers
import usersReducer from './users';

const rootReducer = combineReducers({
	users: usersReducer
});

export default rootReducer;
