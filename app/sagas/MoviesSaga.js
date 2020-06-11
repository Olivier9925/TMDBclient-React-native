import { call, put, takeEvery } from 'redux-saga/effects';
import { createSagaRoot } from '@sagas';
import {
    WSgetDiscoverMovies,
    WSgetTopMovies,
    WSgetTrendMovies,
    WSsearchMovie,
    WSgetCurrentMovie,
    WSgetMovieDetails,
    WSgetMovieCredits,
    WSgetCurrentActorImage,
    WSgetCurrentActorDetails,
    WSgetCurrentActorFilmo,
    WSgetCurrentMovieImage,
    WSgetSimilars,
    WSsearchActor
} from '@services/MoviesServices';
import MoviesReducer from '@reducers/MoviesReducer'
// //////////////////
// SAGA FUNCTIONS
// //////////////////
export function* appStartSaga() {
    try {
        const responseDiscoverMovies = yield call(WSgetDiscoverMovies);
        const responseTopMovies = yield call(WSgetTopMovies);
        const responseTrendMovies = yield call(WSgetTrendMovies);

        if (responseDiscoverMovies && responseTopMovies) {
            discoverMovies = responseDiscoverMovies.data.results;
            topMovies = responseTopMovies.data.results;
            trendMovies = responseTrendMovies.data.results;
        } else {
            console.log('error retrieving movies...')
        }
        yield put(MoviesReducer.actions.getDiscoverMovies(discoverMovies));
        yield put(MoviesReducer.actions.getTopMovies(topMovies));
        yield put(MoviesReducer.actions.getTrendMovies(trendMovies));
    } catch (error) {
        console.log('error getDiscoverAndTopMoviesSaga')
    }
}

export function* getSearchedMoviesSaga(action) {
    try {
        const response = yield call(WSsearchMovie, action?.payload?.search);
        const responseActorSearch = yield call(WSsearchActor, action?.payload?.search);

        if (response) {
            searchedMovies = response.data.results;
            searchedActors = responseActorSearch.data.results[0];
        } else {
            console.log('error retrieving searched movies...')
        }
        yield put(MoviesReducer.actions.getSearchedMovies(searchedMovies));
        yield put(MoviesReducer.actions.getSearchedActors(searchedActors));
    } catch (error) {
        console.log(`error getSearchedMoviesSaga`);
    }
}

export function* getCurrentMoviesSaga(action) {
    try {
        const responseCurrentMovie = yield call(WSgetCurrentMovie, action?.payload?.currentMovieId);
        const responseCurrentMovieDetails = yield call(WSgetMovieDetails, action?.payload?.currentMovieId);
        const responseCurrentMovieCredits = yield call(WSgetMovieCredits, action?.payload?.currentMovieId);
        const responseCurrentMovieImages = yield call(WSgetCurrentMovieImage, action?.payload?.currentMovieId);
        const responseSimilars = yield call(WSgetSimilars, action?.payload?.currentMovieId);

        if (responseCurrentMovie) {
            currentMovie = responseCurrentMovie.data;
            currentMovieDetails = responseCurrentMovieDetails.data;
            currentMovieCredits = responseCurrentMovieCredits.data;
            currentMovieImages = responseCurrentMovieImages.data;
            Similars = responseSimilars.data.results;
        } else {
            console.log('error retrieving current movie...')
        }
        yield put(MoviesReducer.actions.getCurrentMovie(currentMovie));
        yield put(MoviesReducer.actions.getMovieDetails(currentMovieDetails));
        yield put(MoviesReducer.actions.getMovieCredits(currentMovieCredits));
        yield put(MoviesReducer.actions.getCurrentMovieImages(currentMovieImages))
        yield put(MoviesReducer.actions.getSimilars(Similars))

    } catch (error) {
        console.log(`error getCurrentMoviesSaga`);
    }
}

export function* getCurrentActorSaga(action) {
    try {
        const currentActorImage = yield call(WSgetCurrentActorImage, action?.payload?.currentActorId);
        const currentActorDetails = yield call(WSgetCurrentActorDetails, action?.payload?.currentActorId);
        const currentActorFilmo = yield call(WSgetCurrentActorFilmo, action?.payload?.currentActorId);

        const currentActor = {
            details: currentActorDetails.data,
            Image: currentActorImage.data.profiles,
            filmo: currentActorFilmo.data.cast
        }

        yield put(MoviesReducer.actions.getCurrentActor(currentActor));

    } catch (error) {
        console.log('error getCurrentActorSaga')
    }
}

// //////////////////
// WATCH FUNCTIONS
// //////////////////
function* watchAppStart() {
    yield takeEvery(MoviesReducer.actions.startingApp, appStartSaga)
}
function* watchSearch() {
    yield takeEvery(MoviesReducer.actions.selectSearchedMovies, getSearchedMoviesSaga)
}
function* watchCurrentMovie() {
    yield takeEvery(MoviesReducer.actions.setCurrentMovie, getCurrentMoviesSaga)
}
function* watchCurrentActorSelection() {
    yield takeEvery(MoviesReducer.actions.setCurrentActorId, getCurrentActorSaga)
}

export default createSagaRoot(watchAppStart, watchSearch, watchCurrentMovie, watchCurrentActorSelection);
