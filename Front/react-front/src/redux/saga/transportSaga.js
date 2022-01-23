import { put, takeLatest, select,call } from "redux-saga/effects";
import { push } from "react-router-redux";
import {
  GET_ALL_TRANSPORT,
  POST_TRANSPORT,
  DELETE_TRANSPORT
} from "../types/transportType";

import {
  getAllTransportRes,
  getAllTransportErr,
  postTransportRes,
  postTransportErr,
  deleteTransport
} from "../actions/transportAction";
import {
  getAllTransportApi,
  postTransportApi,
  deleteTransportApi
} from "../api/transportApi";
import { fromPairs } from "lodash";
import { openNotification } from "../../utils";

const transport = state => state.transport;

// G E T   A L L   T R A  N S P O R T
function* getAllTransportSaga() {
  // const {limit, offset} = yield select(transport)
  try {
    // const param = {limit, offset}
    const result = yield getAllTransportApi();
    const {status, data} = result
    
    if(status === 200){
      yield put(getAllTransportRes(data.result))
    }else{
      yield put(getAllTransportErr())
    }
  } catch (error) {
    console.log(error);
    yield put(push("/500"))
  }
}
export function* getAllTransportWatcher() {
  yield takeLatest(GET_ALL_TRANSPORT,  getAllTransportSaga);
}

// P O S T    T R A N S P O R T
function* postTransportSaga(action) {
  const { payload } = action;
  try {
    const result = yield postTransportApi(payload);
    const { status } = result;
    if (status === 200) {
      yield put(postTransportRes());
      openNotification("success", "message");
      yield call(getAllTransportSaga, {});
    } else {
      yield put(postTransportErr());
      openNotification("error", "Error");
    }
  } catch (e) {
    console.log(e);
    yield put(postTransportErr());
  }
}

export function* postTransportWatcher() {
  yield takeLatest(POST_TRANSPORT, postTransportSaga);
}
// D E L E T E    T R A N S P O R T
function* deleteTransportSaga(action){
const { id } = action
console.log(id);
try{
  const result = yield deleteTransportApi(id)
  const {status} = result
  if(status===200){
    openNotification("success", "message");
    yield call(getAllTransportSaga,{});
   }else{
    openNotification("error", "message");
   }
}
catch(err){
    console.log(err);
}
}  
export  function* deleteTronsportWatcher(){
  yield takeLatest(DELETE_TRANSPORT, deleteTransportSaga);
} 