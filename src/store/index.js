import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

function configureStore(preloadedState) {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(sagaMiddleware),
	);

	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store
}

export default configureStore
