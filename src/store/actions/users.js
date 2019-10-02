export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
	type: FETCH_USERS
});

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const fetchUsersSuccess = (error) => ({
	type: FETCH_USERS_SUCCESS,
	payload: error
});

export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const fetchUsersError = (payload) => ({
	type: FETCH_USERS_ERROR,
	payload
});

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = (login) => ({
	type: FETCH_USER,
	payload: login
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = (user) => ({
	type: FETCH_USER_SUCCESS,
	payload: user
});

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const fetchUserError = (payload) => ({
	type: FETCH_USER_ERROR,
	payload
});
