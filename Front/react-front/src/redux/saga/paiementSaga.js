import { put, takeLatest, select, call } from "redux-saga/effects";
import { push } from 'react-router-redux';
import {
    getPaiementApi,
    postPaiementApi,
    deletePaiementApi,
    putPaiementApi,
    putValidatePaiementApi
  } from "./../api/paiementApi";
import {
    GET_ALL_PAIEMENT,
    POST_PAIEMENT,
    PUT_PAIEMENT,
    PUT_VALIDATE_PAIEMENT,
    DELETE_PAIEMENT
} from "./../types/paiementType";

import {
    getAllPaiementRes,
    getAllPaiementErr,
    postPaiementRes,
    postPaiementErr,
    putPaiementRes,
    putPaiementErr,
    dataEditPaiement
  } from "../actions/paiementAction";
  
  import { openNotification } from "../../utils";

  const paiement = state => state.paiement;

  // G E T   A N D   P A G I N A T E   P A I E M E N T
function* getPaiementSaga() {
    // const { limit, offset } = yield select(drivers);
    // const prams = {
    //   limit,
    //   offset
    // };
    try {
      const result = yield getPaiementApi();
      const { status, data } = result;
      // console.log(data.result);
      if (status === 200) {
        yield put(getAllPaiementRes(data.result));
      } else {
        yield put(getAllPaiementErr());
      }
    } catch (e) {
      console.log(e);
      yield put(push("/500"));
    }
  }
  export function* getPaiementWatcher() {
    yield takeLatest(/*[*/GET_ALL_PAIEMENT/*, SET_PAGINATE]*/, getPaiementSaga);
  }

  // D E L E T E  P A I E M E N T
function* deletePaiementSaga(action) {
    const { id } = action;
    try {
      const result = yield deletePaiementApi(id);
      const { status } = result;
      if (status === 200) {
        openNotification("success", "message");
        yield call(getPaiementSaga, {});
      } else {
        openNotification("error", "message");
      }
    } catch (e) {
      console.log(e);
    }
  }
  export function* deletePaiementWatcher() {
    yield takeLatest(DELETE_PAIEMENT, deletePaiementSaga);
  }

  // P O S T    P A I E M E N T
function* postPaiementSaga(action) {
    const { payload } = action;
    try {
      const result = yield postPaiementApi(payload);
      console.log(result);
      
      const { status } = result;
      if (status === 200) {
        yield put(postPaiementRes());
        openNotification("success", "message");
        yield call(getPaiementSaga, {});
      } else {
        yield put(postPaiementErr());
        openNotification("error", "already paid");
      }
    } catch (e) {
      console.log(e);
      yield put(postPaiementErr());
    }
  }
  
  export function* postPaiementWatcher() {
    yield takeLatest(POST_PAIEMENT, postPaiementSaga);
  }

  function* putValidatePaiementSaga(action){
    try {
      const {payload} = action
      const {key, TypePaiement,fraisInscription,fraisTransport,montant} = payload
      const pyld = {
        fraisInscription,
        fraisTransport,
        montant,
        typePaiement:TypePaiement
      }
      const params = {
        id:key
      }
      const result = yield putValidatePaiementApi(params,pyld)
      const {status} = result
      if (status===200) {
        openNotification("success","message");
        // putPaiementRes();
        yield call(getPaiementSaga, {});
        // yield call(dataEditPaiement, payload);
      } else {
        openNotification("error", "error");
      }
    } catch (e) {
      console.log(e);
      openNotification("error", "error");
    }
  }
  export function* putValidatePaiementWatcher(){
    yield takeLatest(PUT_VALIDATE_PAIEMENT, putValidatePaiementSaga)
  }

  function* putPaiementSaga(action){
    const {dataEditePaiement:{data:{key,typePaiement}}} = yield select(paiement)
    try {
      const {payload:{fraisInscription,fraisTransport,montant}} = action
      const payload={fraisInscription,fraisTransport,montant,typePaiement}
      const params = {
        id:key
      }
      // console.log(payload,params);
      const result = yield putPaiementApi(params,payload)
      const {status} = result
      if (status===200) {
        openNotification("success","message");
        putPaiementRes();
        yield call(getPaiementSaga, {});
        // yield call(dataEditPaiement, payload);
      } else {
        openNotification("error", "error");
      }
    } catch (e) {
      console.log(e);
      openNotification("error", "error");
    }
  }
  export function* putPaiementWatcher(){
    yield takeLatest(PUT_PAIEMENT, putPaiementSaga)
  }