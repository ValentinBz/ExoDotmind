import { takeLatest, call, put, spawn, all } from 'redux-saga/effects';
import { API_END_POINT } from '../constants/links';
import watcherSagaReset from './sagaResetBeers';

import axios from 'axios';

export function* watcherSaga() {
  yield takeLatest("GET_BEERS_REQUEST", workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(fetchBeerList);
    const data = response.data.beersStore;
    yield put({ type: "GET_BEERS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "GET_BEERS_FAILURE", payload: error });
  }
  yield all([
    spawn (watcherSagaReset)
  ]);
}

function fetchBeerList() {
  return axios(`${API_END_POINT}/beersStore`);
}
