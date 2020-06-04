import { call, put, takeEvery } from 'redux-saga/effects';
import { createSagaRoot } from '@sagas';
import
{
	WSlogin,
	WSgetWatchList,
	WSgetWatchListIds,
	WSgetWatchedListIds,
	WSgetWatchedList,
	WSsaveToWatchList,
	WSsaveToWatchedList,
} from '@services/UserServices';
import userReducer from '@reducers/userReducer';
import { useSelector } from 'react-redux';

// //////////////////
// SAGA FUNCTIONS
// //////////////////
export function* loginSaga(action)
{
	let watchListMoviesId = [];
	let watchListMovies = [];
	let watchedMoviesId = [];
	let watchedMovies = [];

	try {
		const response = yield call(WSlogin, action.payload.user, action.payload.password);
		yield put(userReducer.actions.setUserLog(response?.data?.USER[0]));

		const watchListIds = yield call(WSgetWatchListIds, response?.data?.USER[0]?.id);
		watchListIds?.data?.map((m, i) => watchListMoviesId.push(m.movie_id))

		for (let i = 0; i < watchListMoviesId.length; i++) {
			const watchListMovie = yield call(WSgetWatchList, watchListMoviesId[i]);
			watchListMovies.push(watchListMovie.data)
		}

		const watchedListIds = yield call(WSgetWatchedListIds, response?.data?.USER[0]?.id);
		watchedListIds?.data?.map((m, i) => watchedMoviesId.push(m.movie_id))

		for (let i = 0; i < watchedMoviesId.length; i++) {
			const watchedListMovie = yield call(WSgetWatchedList, watchedMoviesId[i]);
			watchedMovies.push(watchedListMovie.data)
		}

		yield put(userReducer.actions.getWatchList(watchListMovies));
		yield put(userReducer.actions.getWatchedList(watchedMovies));

	} catch (error) {
		console.log('error loginSaga')
	}
}


export function* logoutSaga()
{
	try {

	} catch (error) {

	}
}

export function* saveToWatchListSaga(action)
{
	try {
		yield call(WSsaveToWatchList, action?.payload?.currentMovieId, action?.payload?.userId);
	} catch (error) {
		console.log('error saveToWatchListSaga')
	}
}
export function* saveToWatchedListSaga(action)
{
	try {
		yield call(WSsaveToWatchedList, action?.payload?.currentMovieId, action?.payload?.userId);
	} catch (error) {
		console.log('error saveToWatchListSaga')
	}
}

// //////////////////
// WATCH FUNCTIONS
// //////////////////
function* watchlogin()
{
	yield takeEvery(userReducer.actions.loginSaisie, loginSaga)
}

function* watchLogout()
{
	yield takeEvery(userReducer.actions.logout, logoutSaga)
}

function* watchSaveToWatchList()
{
	yield takeEvery(userReducer.actions.saveToWatchList, saveToWatchListSaga)
}
function* watchSaveToWatchedList()
{
	yield takeEvery(userReducer.actions.saveToWatchedList, saveToWatchedListSaga)
}

export default createSagaRoot(watchlogin, watchLogout, watchSaveToWatchList, watchSaveToWatchedList);
