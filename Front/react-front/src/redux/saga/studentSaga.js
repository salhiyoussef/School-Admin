import { put, takeLatest,select, call } from "redux-saga/effects";
import { push } from 'react-router-redux';

import {
  GET_LEVEL,
  POST_LEVEL,
  POST_CLASS,
  GET_CLASS,
  GET_SECTION,
  POST_SECTION,
  GET_ALL_STUDENTS,
  POST_STUDENTS,
  SET_EMAIL_STUDENT_DETAIL,
  DELETE_STUDENT,
  PUT_STUDENT
} from "../types/studentType";
import {
  // =============  A C T I O N     F O R   A D D   S T U D E N T S  // ===========
  getLevelRes,
  getLevelErr,
  postLevelRes,
  getClassRes,
  postClassRes,
  getClassErr,
  getSectionRes,
  postSectionRes,
  getSectionErr,
  putStudent,
  putStudentErr,
  putStudentRes,
  // =============  A C T I O N     F O R   A D D   S T U D E N T S  // ===========
  postStudentsRes,
  postStudentsErr,
  getAllStudentsRes,
  getAllStudentsErr,
  setEmailStudentDetailRes,
  setEmailStudentDetailErr
} from "../actions/studentAction";
import {
  getLevelApi,
  postLevelApi,
  postClassApi,
  getClassApi,
  getSectionApi,
  postSectionApi,
  getAllStudentsApi,
  postStudentsApi,
  getStudentEmail,
  getStudentsDataRes,
  getStudentsDataErr,
  deleteStudentApi,
  putStudentApi
} from "../api/studentApi";
import { openNotification } from "../../utils";
const students = state => state.students;
// ======================  S A G A   F O R   A D D   S T U D E N T S  // ======================

// S A G A   F O R   L E V E L
function* getLevelSaga() {
  try {
    const result = yield getLevelApi();
    const { status, data } = result;
    if (status === 200) {
      yield put(getLevelRes(data));
    } else {
      yield put(getLevelErr());
    }
  } catch (e) {
    console.log(e);
  }
}

export function* getLevelWatcher() {
  yield takeLatest(GET_LEVEL, getLevelSaga);
}

function* postLevelSaga(action) {
  const { payload } = action;
  try {
    const result = yield postLevelApi(payload);
    const { status, data } = result;
    if (status === 200) {
      const { message, schoolLevel } = data;
      yield put(postLevelRes(schoolLevel));
      openNotification("success", message);
      yield call(getLevelSaga, {});
    } else {
      openNotification("error", "Try again");
    }
  } catch (e) {
    console.log(e);
  }
}

export function* postLevelWatcher() {
  yield takeLatest(POST_LEVEL, postLevelSaga);
}
// S A G A   F O R   L E V E L

// S A G A   F O R  C L A S S
function* getClassSaga(action) {
  const { levelID } = action;
  try {
    const result = yield getClassApi(levelID);
    const { status, data } = result;
    if (status === 200) {
      yield put(getClassRes(data));
    } else {
      yield put(getClassErr());
    }
  } catch (e) {
    console.log(e);
  }
}
export function* getClassWatcher() {
  yield takeLatest(GET_CLASS, getClassSaga);
}

function* postClassSaga(action) {
  const { payload } = action;
  try {
    const result = yield postClassApi(payload);
    const { status, data } = result;

    if (status === 200) {
      const { message, schoolClass } = data;
      yield put(postClassRes(schoolClass));
      openNotification("success", message);
      yield call(getClassSaga, {});
    } else {
      openNotification("error", "Try again");
    }
  } catch (e) {
    console.log(e);
  }
}

export function* postClassWatcher() {
  yield takeLatest(POST_CLASS, postClassSaga);
}
// S A G A   F O R  C L A S S

// S A G A   F O R  S E C T I O N
function* getSectionSaga(action) {
  const { id } = action;
  try {
    const result = yield getSectionApi(id);
    const { status, data } = result;
    if (status === 200) {
      yield put(getSectionRes(data));
    } else {
      yield put(getSectionErr());
    }
  } catch (e) {
    console.log(e);
  }
}
export function* getSectionWatcher() {
  yield takeLatest(GET_SECTION, getSectionSaga);
}

function* postSectionSaga(action) {
  const { payload } = action;
  console.log(action);  
  try {
    const result = yield postSectionApi(payload);
    const { status, data } = result;
    if (status === 200) {
      const { message, schoolSection } = data;
      yield put(postSectionRes(schoolSection));
      openNotification("success", message);
      yield call(getSectionSaga, {});
    } else {
      openNotification("error", "Try again");
    }
  } catch (e) {
    console.log(e);
  }
}

export function* postSectionWatcher() {
  yield takeLatest(POST_SECTION, postSectionSaga);
}
// ======================  S A G A   F O R   A D D   S T U D E N T S  // ======================


// G E T   A L L  S T U D E N T S
function* getAllStudentsSaga() {
  const { limit, offset } = yield select(students);
  const prams = {
    limit,
    offset
  };
  try {
    const result = yield getAllStudentsApi(prams);
    const { status, data } = result;
    if (status === 200) {
      yield put(getAllStudentsRes(data));
    } else {
      yield put(getAllStudentsErr());
    }
  } catch (e) {
    console.log(e);
  }
}
export function* getAllStudentsWatcher() {
  yield takeLatest(GET_ALL_STUDENTS, getAllStudentsSaga);
}

// G E T   S T U D E N T   B Y    E M A I L
function* getStudentEmailSaga(action) {
  try {
    const { email } = action;
    const result = yield getStudentEmail(email);
    const { status, data} = result;
    const dataSource = data.result !== null ? data.result.section.classId.schoolLevelId : [];

    if(status === 401) {
        yield put(push('/'));
        openNotification("warning", "Your Account is experide");
    }
    if (status === 304) {
      yield put(setEmailStudentDetailRes(data));
    }
    if (status === 200) {
      yield put(setEmailStudentDetailRes(data));
    } else {
      yield put(setEmailStudentDetailErr());
    }
  } catch (e) {
    console.log(e);
    yield put(setEmailStudentDetailErr());
  }
}

export function* getStudentEmailWatcher() {
  yield takeLatest(SET_EMAIL_STUDENT_DETAIL, getStudentEmailSaga);
}
// G E T   S T U D E N T  B Y   E M A I L

// P O S T    S T U D E N T 
function* postStudentsSaga(action) {
  const { payload } = action;
  console.log(action);
  try {
    const result = yield postStudentsApi(payload);
    
    const { status } = result;
    if (status === 200) {
      yield put(postStudentsRes());
      openNotification("success", "message");
      yield call(getAllStudentsSaga, {});
    } else {
      yield put(postStudentsErr());
      openNotification("error", "Error");
    }
  } catch (e) {
    console.log(e);
    yield put(postStudentsErr());
  }
}

export function* postStudentsWatcher() {
  yield takeLatest(POST_STUDENTS, postStudentsSaga);
}

function* deleteStudentSaga(action){
  const {id} = action
  const result = yield deleteStudentApi(id)
  const {status} = result
  try{
    if(status==200){
      openNotification("success","message");
      yield call(getAllStudentsSaga,{})
    }else {
      openNotification("error", "message");
    }
  }catch(e){
    console.log(e);
  }
}
export function* deleteStudentWatcher(){
  yield takeLatest(DELETE_STUDENT, deleteStudentSaga);
}

function* putStudentSaga(action){
  const {editStudent:{data:{_id}}} = yield select(students)
  try {
    const {payload} = action
    const params = {
      id:_id
    }
    // console.log(payload,params);
    const result = yield putStudentApi(params,payload)
    const {status} = result
    if (status===200) {
      openNotification("success","message");
      putStudentRes();
      yield call(getAllStudentsSaga, {});
      // yield call(getStudentEmailSaga, payload);
    } else {
      openNotification("error", "error");
    }
  } catch (e) {
    console.log(e);
    openNotification("error", "error");
  }
}
export function* putStudentWatcher(){
  yield takeLatest(PUT_STUDENT, putStudentSaga)
}