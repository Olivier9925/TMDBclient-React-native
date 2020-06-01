import { call, put, takeEvery } from 'redux-saga/effects';
import { createSagaRoot } from '@sagas';
import MoviesServices, { WSgetDiscoverMovies, WSgetTopMovies, WSsearchMovie } from '@services/MoviesServices';
import MoviesReducer from '@reducers/MoviesReducer';
import { NavigationActions } from 'react-navigation';

// //////////////////
// SAGA FUNCTIONS
// //////////////////
export function* appStartSaga()
{
  try {
    const responseDiscoverMovies = yield call(WSgetDiscoverMovies);
    const responseTopMovies = yield call(WSgetTopMovies);
    if (responseDiscoverMovies && responseTopMovies) {
      discoverMovies = responseDiscoverMovies.data.results;
      topMovies = responseTopMovies.data.results;
    } else {
      console.log('error retrieving movies...')
    }
    yield put(MoviesReducer.actions.getDiscoverMovies(discoverMovies));
    yield put(MoviesReducer.actions.getTopMovies(topMovies));
  } catch (error) {
    console.log('error getDiscoverAndTopMoviesSaga')
  }
}

export function* getSearchedMoviesSaga(action)
{
  try {
    const response = yield call(WSsearchMovie, action?.payload?.search);
    if (response) {
      searchedMovies = response.data.results;
    } else {
      console.log('error retrieving searched movies...')
    }

    yield put(MoviesReducer.actions.getSearchedMovies(searchedMovies));
    // yield put(NavigationActions.navigate({ routeName: 'Movie list' })); a changer

  } catch (error) {
    console.log(`error getSearchedMoviesSaga`);
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
function* watchAppStart()
{
  yield takeEvery(MoviesReducer.actions.startingApp, appStartSaga)
}
function* watchSearch()
{
  yield takeEvery(MoviesReducer.actions.selectSearchedMovies, getSearchedMoviesSaga)
}

export default createSagaRoot(watchAppStart, watchSearch);
