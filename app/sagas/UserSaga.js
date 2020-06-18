import { call, put, takeEvery } from 'redux-saga/effects';
import { createSagaRoot } from '@sagas';
import {
	WSlogout,
	WSgetWatchList,
	WSsaveToWatchList,
	WSsaveToWatchedList,
	WSgetToken,
	WScreateSessionLogin,
	WScreateSession,
	WSgetAccountDetails
} from '@services/UserServices';
import UserReducer from '@reducers/UserReducer';

// //////////////////
// SAGA FUNCTIONS
// //////////////////
export function* loginSaga(action) {

	try {
		const response_token = yield call(WSgetToken);
		const request_token = response_token.data.request_token;
		try {
			yield call(WScreateSessionLogin, action?.payload?.user, action?.payload?.password, request_token);
			const response_session_id = yield call(WScreateSession, request_token);
			const session_id = response_session_id.data.session_id;
			const response_accountDetails = yield call(WSgetAccountDetails, session_id);
			const account_id = response_accountDetails.data.id;
			yield put(UserReducer.actions.setUserLog(session_id, account_id));
			yield put(UserReducer.actions.setUser(response_accountDetails.data));
			yield call(loadingLists, session_id, account_id);

		} catch (error) {
			console.log('erreur de connexion : ', error)
		}


	} catch (error) {
		console.log('error loginSaga')
	}
}

export function* logoutSaga(action) {
	try {
		yield call(WSlogout, action?.payload?.session_id)
	} catch (error) {
		console.log('erreur logout : ', error)
	}
}

export function* loadingLists(session_id, account_id) {
	let watchListMoviesId = [];
	let watchListMovies = [];
	let watchedMoviesId = [];
	let watchedMovies = [];

	try {
		//const watchListIds = yield call(WSgetWatchListIds, userId);
		//watchListIds?.data?.map((m, i) => watchListMoviesId.push(m.movie_id))

		const watchListMovies = yield call(WSgetWatchList, session_id, account_id);

		//const watchedListIds = yield call(WSgetWatchedListIds, userId);
		//watchedListIds?.data?.map((m, i) => watchedMoviesId.push(m.movie_id))

		// for (let i = 0; i < watchedMoviesId.length; i++) {
		// 	const watchedListMovie = yield call(WSgetWatchedList, watchedMoviesId[i]);
		// 	watchedMovies.push(watchedListMovie.data)
		// }

		yield put(UserReducer.actions.getWatchList(watchListMovies.data.results));
		// yield put(UserReducer.actions.getWatchedList(watchedMovies));

	} catch (error) {
		console.log('error loadingLists')
	}
}

export function* saveToWatchListSaga(action) {
	try {
		yield call(WSsaveToWatchList, action?.payload?.currentMovieId, action?.payload?.account_id, action?.payload?.session_id, action?.payload?.watchList);
		yield call(loadingLists, action?.payload?.session_id, action?.payload?.account_id);
	} catch (error) {
		console.log('error saveToWatchListSaga', error)
	}
}

export function* saveToWatchedListSaga(action) {
	try {
		yield call(WSsaveToWatchedList, action?.payload?.currentMovieId, action?.payload?.userId);
		yield call(loadingLists, action?.payload?.userId);
	} catch (error) {
		console.log('error saveToWatchedListSaga : ', error)
	}
}

// //////////////////
// WATCH FUNCTIONS
// //////////////////
function* watchlogin() {
	yield takeEvery(UserReducer.actions.loginSaisie, loginSaga)
}
function* watchlogout() {
	yield takeEvery(UserReducer.actions.logout, logoutSaga)
}


function* watchSaveToWatchList() {
	yield takeEvery(UserReducer.actions.saveToWatchList, saveToWatchListSaga)
}
function* watchSaveToWatchedList() {
	yield takeEvery(UserReducer.actions.saveToWatchedList, saveToWatchedListSaga)
}

export default createSagaRoot(watchlogin, watchSaveToWatchList, watchSaveToWatchedList);
