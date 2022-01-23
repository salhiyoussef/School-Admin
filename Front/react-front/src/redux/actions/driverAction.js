import {
  GET_DRIVER_DATA,
  SET_PAGINATE,
  DELETE_DRIVER,
  POST_DRIVER,
  PUT_DRIVER,
  SEARCH_DRIVER
} from "./../types/driverType";
import { actionCreator } from "../../utils";

export function search_driver(payload) {
  return {
    type: SEARCH_DRIVER,
    payload
  };
}

// G E T   D A T A   D R I V E R
export function getDriverData() {
  return {
    type: GET_DRIVER_DATA
  };
}

export function getDriverDataRes(payload) {
  return {
    type: actionCreator(GET_DRIVER_DATA, "res"),
    payload
  };
}

export function getDriverDataErr() {
  return {
    type: actionCreator(GET_DRIVER_DATA, "err")
  };
}

// P A G I N A T E   D R I V E R
export function setPaginate(page) {
  return {
    type: SET_PAGINATE,
    page
  };
}

// D E L E T E   D R I V E R
export function deleteDriver(id) {
  return {
    type: DELETE_DRIVER,
    id
  };
}

// P O S T   D R I V E R
export function postDriver(payload) {
  return {
    type: POST_DRIVER,
    payload
  };
}

export function postDriverRes() {
  return {
    type: actionCreator(POST_DRIVER, "res")
  };
}

export function postDriverErr() {
  return {
    type: actionCreator(POST_DRIVER, "err")
  };
}

// P U T   D R I V E R
export function putDriver(payload) {
  return {
    type: PUT_DRIVER,
    payload
  };
}

export function putDriverRes() {
  return {
    type: actionCreator(PUT_DRIVER, "res")
  };
}

export function putDriverErr() {
  return {
    type: actionCreator(PUT_DRIVER, "err")
  };
}
