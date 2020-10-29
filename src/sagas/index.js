import { takeLatest, all } from 'redux-saga/effects';

// importing request type only
import { GET_CATEGORIES_REQUEST } from '../redux/actions/Types';

// saga function
import { getCategoriesSaga } from './getCategoriesSaga';

export default function* rootSagas() {
  yield all([takeLatest(GET_CATEGORIES_REQUEST, getCategoriesSaga)]);
}
