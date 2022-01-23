import { put, takeLatest, call, select } from "redux-saga/effects";
import { push } from 'react-router-redux';
import {
  getAllUsersApi,
  getUserEmail,
  deleteUserApi,
  postNewUsersApi,
  putUserApi
} from "../api/usersApi";
import {
  getAllUsersRes,
  getAllUsersErr,
  setEmailUserDetailRes,
  setEmailUserDetailErr,
  switchDetailUser,
  putUserRes
} from "../actions/usersAction";
import {
  GET_ALL_USERS,
  SET_EMAIL_USER_DETAIL,
  DELETE_USER,
  POST_NEW_USER,
  PUT_USER
} from "../types/usersType";
import { openNotification } from "../../utils";

const layout = state => state.layout;
const users = state => state.users;
// G E T   A L L   U S E R S
function* getAllUsersSaga() {
  try {
    const {limit, offset} = yield select(users);
    const prams ={
        limit,
        offset
    };
    const result = yield getAllUsersApi(prams);
    const { status, data } = result;
    if(status === 401) {
        yield put(push('/'));
        openNotification("warning", "Your Account is experide");
    }
    if (status === 200) {
      const { result, total } = data;
      yield put(
        getAllUsersRes({
          result,
          total
        })
      );
    } else {
      yield put(getAllUsersErr());
    }
  } catch (e) {
    console.log(e);
    yield put(getAllUsersErr());
  }
}

export function* getAllUsersWatcher() {
  yield takeLatest(GET_ALL_USERS, getAllUsersSaga);
}
// G E T   A L L   U S E R S

// G E T   U S E R   B Y    E M A I L
function* getUserEmailSaga(action) {
  try {
    const { email } = action;
    const result = yield getUserEmail(email);
    const { status, data } = result;
    if(status === 401) {
        yield put(push('/'));
        openNotification("warning", "Your Account is experide");
    }
    if (status === 200) {
      yield put(setEmailUserDetailRes(data.result));
    } else {
      yield put(setEmailUserDetailErr());
    }
  } catch (e) {
    console.log(e);
    yield put(setEmailUserDetailErr());
  }
}

export function* getUserEmailWatcher() {
  yield takeLatest(SET_EMAIL_USER_DETAIL, getUserEmailSaga);
}
// G E T   U S E R  B Y   E M A I L

// D E L E T E   U S E R
function* deleteUserSaga(action) {
  const { id } = action;
  const {
    login: { user }
  } = yield select(layout);
  try {
    const result = yield deleteUserApi(id);
    const { status } = result;
    if(status === 401) {
        yield put(push('/'));
        openNotification("warning", "Your Account is experide");
    }
    if (status === 200) {
      openNotification("success", "message");
      yield call(getAllUsersSaga, {});
      yield put(switchDetailUser(user));
      console.log('test');
      
    } else {
      openNotification("error", "error");
    }
  } catch (e) {
    console.log(e);
  }
}
export function* deleteUserWatcher() {
  yield takeLatest(DELETE_USER, deleteUserSaga);
}

// P O S T   N E W   U S E R
function* postNewUserSaga(action) {
  const { payload } = action;
  try {
    const result = yield postNewUsersApi(payload);
    const { status } = result;
    if(status === 401) {
        yield put(push('/'));
        openNotification("warning", "Your Account is experide");
    }
    if (status === 200) {
      openNotification("success", "message");
      yield call(getAllUsersSaga, {});
    } else {
      openNotification("error", "error");
    }
  } catch (e) {
    console.log(e);
  }
}

export function* postNewUserWatcher() {
    yield takeLatest(POST_NEW_USER, postNewUserSaga);
}

// P U T   U S E R
function* putUserSaga(action) {
    const {editUser:{data:{_id}}} = yield select(users);
    try {
        const {payload} = action
        const params = {
            id: _id
        }
        const result = yield putUserApi(params, payload);
        const {status} = result;
        if(status === 200) {
            openNotification("success", "message");
            putUserRes();
            yield call(getAllUsersSaga, {});
            yield call(getUserEmailSaga, payload);
        } else {
            openNotification("error", "error");
        }
    } catch(e) {
        console.log(e);
        openNotification("error", "error");
    }
}

export function* putUserWatcher() {
    yield takeLatest(PUT_USER, putUserSaga);
}