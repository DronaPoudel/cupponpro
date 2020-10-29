import { call, put } from 'redux-saga/effects';
import {
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
} from '../redux/actions/Types';

import { getCategories } from '../services/api';

export function* getCategoriesSaga() {
  try {
    const response = yield call(getCategories);

    console.log(response, 'response in the saga');
    const resPayload = response.data;

    // dispatch a scuess action to the store with the getCategories
    if (response.data.success === 1) {
      yield put({ type: GET_CATEGORIES_SUCCESS, resPayload });
    } else {
      yield put({ type: GET_CATEGORIES_FAILURE, resPayload });
    }
    // yield put({ type: GET_CATEGORIES_SUCCESS, resPayload });
  } catch (error) {
    let { response } = error;
    yield put({ type: GET_CATEGORIES_FAILURE, response });
  }
}
