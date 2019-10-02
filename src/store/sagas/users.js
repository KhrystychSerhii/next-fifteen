import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import {
	FETCH_USERS, fetchUsersSuccess, fetchUsersError,
	FETCH_USER, fetchUserSuccess, fetchUserError
} from '../actions/users';
import { fetchUsers, fetchUser } from '../../services/Api';

function* fetchUsersAsync({ payload }) {
	try {
		const response = yield fetchUsers();
		yield put(fetchUsersSuccess(response.data || []));
	} catch (e) {
		yield put(fetchUsersError(e))
	}
}

function* fetchUserAsync({ payload }) {
	try {
		const response = yield fetchUser(payload);
		yield put(fetchUserSuccess(response.data));
	} catch (e) {
		yield put(fetchUserError(e));
	}
}


export function* watchUsers() {
	yield takeLatest(FETCH_USERS, fetchUsersAsync);
}

export function* watchUser() {
	yield takeLatest(FETCH_USER, fetchUserAsync);
}
