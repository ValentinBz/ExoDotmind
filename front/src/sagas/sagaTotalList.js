import { takeLatest, call, put, spawn } from 'redux-saga/effects';
import { API_END_POINT } from '../constants/api';
import watcherSagaDetails from './sagaDetailsId';

import axios from 'axios';

export function* watcherSaga() {
  yield takeLatest("GET_TOTAL_LIST_REQUEST", workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(fetchTotalList);
    const data = response.data;
    yield put({ type: "GET_TOTAL_LIST_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "GET_TOTAL_LIST_FAILURE", payload: error });
  }
  yield spawn (watcherSagaDetails)

}

function fetchTotalList() {
  return axios(`${API_END_POINT}`);
}
