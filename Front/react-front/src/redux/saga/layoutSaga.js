import { put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import {
  setIndexPageCurrent,
  postNewUsersData,
  setTokenUser,
  setErrorLogin,
  restLayout
} from "../actions/layoutAction";
import {
  SET_PAGE_CURRENT,
  POST_NEW_USERS,
  LOGIN_USERS,
  LOGOUT_USER,
} from "./../types/layoutType";
import { postNewUsersApi, loginUserApi } from "../api/layoutApi";
import { openNotification, Cookie } from "../../utils";

function* setPagesCurrentSaga(action) {
  const { pages } = action;
  switch (pages) {
    case "Dashboard":
    case "dashboard":
      return yield put(setIndexPageCurrent(1));

    case "Users":
    case "users":
      return yield put(setIndexPageCurrent(2));

    case "StudentsAdd":
    case "students-add":
      return yield put(setIndexPageCurrent(3));

    case "StudentsLists":
    case "students-list":
      return yield put(setIndexPageCurrent(4));

    case "Driver":
    case "driver":
      return yield put(setIndexPageCurrent(5));

    case "Transport":
    case "transport":
      return yield put(setIndexPageCurrent(6));

    default:
      break;
  }
}
export function* setPagesCurrentWatcher() {
  yield takeLatest(SET_PAGE_CURRENT, setPagesCurrentSaga);
}

// C R E A T E   N E W   U S E R S
function* postNewUsersSaga(action) {
  const { value } = action;
  try {
    const result = yield postNewUsersApi(value);
    const {
      status,
      data: { message, user }
    } = result;
    if (status === 200) {
      yield put(postNewUsersData(user));
      openNotification("success", message);
      yield put(push("/"));
    } else {
      openNotification("error", "Error to Add");
    }
  } catch (e) {
    console.log(e);
  }
}

export function* postNewUsersWatcher() {
  yield takeLatest(POST_NEW_USERS, postNewUsersSaga);
}
// C R E A T E   N E W   U S E R S

// L O G I N   U S E R
function* loginUserSaga(action) {
  const { value } = action;
  try {
    const result = yield loginUserApi(value);
    const { status, data } = result;
    if (status === 200) {
      openNotification("success", data.message);

      const {
        tokenData: { token, type, expire }
      } = data;
      const expireIn = new Date();
      expireIn.setSeconds(expire);
      const optionCookies = { path: "/", expires: expireIn };
      Cookie.set("token", token, optionCookies);
      Cookie.set("type", type, optionCookies);

      yield put(setTokenUser(data));
      yield put(setIndexPageCurrent(1));
      yield put(push("/dashboard"));
    } else {
      openNotification("error", "Error");
      yield put(setErrorLogin());
    }
  } catch (e) {
    console.log(e);
    openNotification("error", "Error");
    yield put(setErrorLogin());
  }
}

export function* loginUserWatcher() {
  yield takeLatest(LOGIN_USERS, loginUserSaga);
}
// L O G I N   U S E R

// L O U G O U T   U S E R
function* lougoutUserSaga() {
  try {
    Cookie.remove("token");
    Cookie.remove("type");
    localStorage.clear();
    yield put(push("/"));
    yield put(restLayout());
    openNotification("success", "Successful Disconnection");
  } catch (e) {
    console.log(e);
  }
}

export function* lougoutUsersWatcher() {
  yield takeLatest(LOGOUT_USER, lougoutUserSaga);
}
// L O U G O U T   U S E R
