import { put, takeLatest, select, call } from "redux-saga/effects";
import { push } from 'react-router-redux';
import {
  getDriversApi,
  deleteDriverApi,
  postDriverApi
} from "./../api/driverApi";
import {
  GET_DRIVER_DATA,
  SET_PAGINATE,
  DELETE_DRIVER,
  POST_DRIVER
} from "./../types/driverType";
import {
  getDriverDataRes,
  getDriverDataErr,
  postDriverRes,
  postDriverErr
} from "../actions/driverAction";

import { openNotification } from "../../utils";

const drivers = state => state.drivers;

// G E T   A N D   P A G I N A T E   D R I V E R
function* getDriverSaga() {
  const { limit, offset } = yield select(drivers);
  const prams = {
    limit,
    offset
  };
  try {
    const result = yield getDriversApi(prams);
    const { status, data } = result;
    if (status === 200) {
      yield put(getDriverDataRes(data));
    } else {
      yield put(getDriverDataErr());
    }
  } catch (e) {
    console.log(e);
    yield put(push("/500"));
  }
}
export function* getDriverWatcher() {
  yield takeLatest([GET_DRIVER_DATA, SET_PAGINATE], getDriverSaga);
}

// D E L E T E  D R I V E R
function* deleteDriverSaga(action) {
  const { id } = action;
  try {
    const result = yield deleteDriverApi(id);
    const { status } = result;
    if (status === 200) {
      openNotification("success", "message");
      yield call(getDriverSaga, {});
    } else {
      openNotification("error", "message");
    }
  } catch (e) {
    console.log(e);
  }
}

export function* deleteDreiverWatcher() {
  yield takeLatest(DELETE_DRIVER, deleteDriverSaga);
}

// P O S T    D R I V E R
function* postDriverSaga(action) {
  const { payload } = action;
  try {
    const result = yield postDriverApi(payload);
    console.log(result);
    
    const { status } = result;
    if (status === 200) {
      yield put(postDriverRes());
      openNotification("success", "message");
      yield call(getDriverSaga, {});
    } else {
      yield put(postDriverErr());
      openNotification("error", "Error");
    }
  } catch (e) {
    console.log(e);
    yield put(postDriverErr());
  }
}

export function* postDriverWatcher() {
  yield takeLatest(POST_DRIVER, postDriverSaga);
}
