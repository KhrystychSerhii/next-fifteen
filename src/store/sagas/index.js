import { all, fork } from 'redux-saga/effects';

import { watchUsers, watchUser } from './users';

export default function* rootSaga() {
	yield all([
		// users
		fork(watchUsers),
		fork(watchUser)
	]);
}
