import {
  GET_ALL_USERS,
  SET_EMAIL_USER_DETAIL,
  DELETE_USER,
  SWITCH_USER_ACTIF,
  POST_NEW_USER,
  SET_PAGINATE_NUMBER,
  SET_DATA_USER_IN_EDIT,
  PUT_USER
} from "../types/usersType";
import { actionCreator } from "../../utils";

export function getAllUsers() {
  return {
    type: GET_ALL_USERS
  };
}

export function getAllUsersRes(payload) {
  return {
    type: actionCreator(GET_ALL_USERS, "res"),
    payload
  };
}

export function getAllUsersErr() {
  return {
    type: actionCreator(GET_ALL_USERS, "err")
  };
}

export function setEmailUserDetail(email) {
  return {
    type: SET_EMAIL_USER_DETAIL,
    email
  };
}

export function setEmailUserDetailRes(payload) {
  return {
    type: actionCreator(SET_EMAIL_USER_DETAIL, "res"),
    payload
  };
}

export function setEmailUserDetailErr() {
  return {
    type: actionCreator(SET_EMAIL_USER_DETAIL, "err")
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    id
  };
}

export function switchDetailUser(payload) {
  return {
    type: SWITCH_USER_ACTIF,
    payload
  };
}

export function postNewUser(payload) {
  return {
    type: POST_NEW_USER,
    payload
  };
}

export function setPaginate(page) {
  return {
    type: SET_PAGINATE_NUMBER,
    page
  };
}

export function setDateUserEdit(payload) {
  return {
    type: SET_DATA_USER_IN_EDIT,
    payload
  };
}

export function putUser(payload) {
    return {
        type: PUT_USER,
        payload,
    }
}

export function putUserRes() {
    return {
        type: actionCreator(PUT_USER, 'res')
    }
}

export function putUserErr() {
    return {
        type: actionCreator(PUT_USER, 'err')
    }
}