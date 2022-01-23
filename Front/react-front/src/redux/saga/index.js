import { all } from "redux-saga/effects";

import {
  setPagesCurrentWatcher,
  postNewUsersWatcher,
  loginUserWatcher,
  lougoutUsersWatcher
} from "./layoutSaga";

import {
  getAllUsersWatcher,
  getUserEmailWatcher,
  deleteUserWatcher,
  postNewUserWatcher,
  putUserWatcher
} from "./usersSaga";

import {
  getLevelWatcher,
  postLevelWatcher,
  postClassWatcher,
  getClassWatcher,
  getSectionWatcher,
  postSectionWatcher,
  getAllStudentsWatcher,
  postStudentsWatcher,
  getStudentEmailWatcher,
  deleteStudentWatcher,
  putStudentWatcher
} from "./studentSaga";

import {
  getDriverWatcher,
  deleteDreiverWatcher,
  postDriverWatcher
} from "./driverSaga";

import {
  getAllTransportWatcher,
  postTransportWatcher,
  deleteTronsportWatcher
} from "./transportSaga";

import {
  getPaiementWatcher,
  deletePaiementWatcher,
  postPaiementWatcher,
  putPaiementWatcher,
  putValidatePaiementWatcher
}from "./paiementSaga"

export default function* rootSaga() {
  yield all([
    //  L A Y O U T
    setPagesCurrentWatcher(),
    postNewUsersWatcher(),
    loginUserWatcher(),
    lougoutUsersWatcher(),
    //  L A Y O U T

    //  U S E R S
    getAllUsersWatcher(),
    getUserEmailWatcher(),
    deleteUserWatcher(),
    postNewUserWatcher(),
    putUserWatcher(),
    //  U S E R S

    // S T U D E N T S
    getLevelWatcher(),
    postLevelWatcher(),
    postClassWatcher(),
    getClassWatcher(),
    getSectionWatcher(),
    postSectionWatcher(),
    getAllStudentsWatcher(),
    getStudentEmailWatcher(),
    postStudentsWatcher(),
    deleteStudentWatcher(),
    putStudentWatcher(),
    // S T U D E N T S

    // D R I V E R S
    getDriverWatcher(),
    deleteDreiverWatcher(),
    postDriverWatcher(),
    // D R I V E R S

    // T R A N S P O R T
    getAllTransportWatcher(),
    postTransportWatcher(),
    deleteTronsportWatcher(),
    // T R A N S P O R T

    // P A I E M E N T
    getPaiementWatcher(),
    deletePaiementWatcher(),
    postPaiementWatcher(),
    putPaiementWatcher(),
    putValidatePaiementWatcher()
    // P A I E M E N T

  ]);
}
