// Modules
import { all, fork } from 'redux-saga/effects';
// Sagas
import MoviesSaga from '@sagas/MoviesSaga';
import UserSaga from '@sagas/UserSaga';

export function createSagaRoot(...sagas)
{
  return function* rootSaga()
  {
    yield all(sagas.map(saga => fork(saga)));
  };
}

export default createSagaRoot(MoviesSaga, UserSaga);
