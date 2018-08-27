import { takeLatest, call, put } from 'redux-saga/effects';
import { API_POST_ID } from '../constants/api';

import axios from 'axios';

export default function* watcherSagaDetails() {
  yield takeLatest("GET_INFO_FROM_API_REQUEST", workerSaga);
}

function* workerSaga(data) {
  const actionDispatched = data;
  try {
    const response = yield call(fetchDetails, actionDispatched.payload.id);
    const data = response.data;
    yield put({ type: "GET_INFO_FROM_API_SUCCESS", payload: { ...data, mail: actionDispatched.payload.email} });
  } catch (error) {
    yield put({ type: "GET_INFO_FROM_API_FAILURE", payload: error });
  }
}

function fetchDetails(actionDispatched) {
  return axios(`${API_POST_ID}/${actionDispatched}`);
}
