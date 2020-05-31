import { call, put, takeEvery } from 'redux-saga/effects';
import { createSagaRoot } from '@sagas';
import MoviesServices, { WSgetDiscoverMovies } from '@services/MoviesServices';
import MoviesReducer from '@reducers/MoviesReducer';

// //////////////////
// SAGA FUNCTIONS
// //////////////////
export function* getDiscoverMoviesSaga()
{
  try {
    const response = yield call(WSgetDiscoverMovies);
    if (response) {
      discoverMovies = response.data.results;
    } else {
      console.log("Pas de films recup...");
    }
    yield put(MoviesReducer.actions.getDiscoverMovies(discoverMovies));
  } catch (error) {
    console.log(`error getDiscoverMoviesSaga`);
  }
}

export function* getTopMoviesSaga()
{
  try {
    const topMovies = yield call(MoviesServices.WSgetTopMovies);
    console.log('topMovies : ', topMovies);
    yield put(MoviesReducer.actions.getTopMovies(topMovies));
  } catch (error) {
    console.log(`error getTopMoviesSaga`);
  }
}

export function* getSearchedMoviesSaga(action)
{
  try {
    const searchedMovies = yield call(MoviesServices.WSsearchMovie, action.searchValue);
    console.log('searchedMovies : ', searchedMovies);
    yield put(MoviesReducer.actions.getSearchedMovies(searchedMovies));
  } catch (error) {
    console.log(`error getTopMoviesSaga`);
  }
}

export function* getCurrentMoviesSaga()
{
  try {
    const currentMovie = yield call(MoviesServices.WSdisplayCurrentMovie);
    console.log('currentMovie : ', currentMovie);
    yield put(MoviesReducer.actions.getCurrentMovie(currentMovie));
  } catch (error) {
    console.log(`error getTopMoviesSaga`);
  }
}

// //////////////////
// WATCH FUNCTIONS
// //////////////////
function* watchDiscoverMovies()
{
  yield takeEvery(MoviesReducer.actions.selectDiscoverMovies, getDiscoverMoviesSaga);
}


export default createSagaRoot(watchDiscoverMovies);
