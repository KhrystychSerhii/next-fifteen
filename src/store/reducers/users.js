import {
	FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR,
	FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR
} from '../actions/users';

const initialState = {
	users: [],
	user: null,
	loading: false,
	error: null
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS:
		case FETCH_USER:
			return {
				...state,
				loading: true
			};

		case FETCH_USERS_ERROR:
		case FETCH_USER_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}

		case FETCH_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				users: action.payload
			};
		case FETCH_USER_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload
			};

		default:
			return state;
	}
};

export default usersReducer;
