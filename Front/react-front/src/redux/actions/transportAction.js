import {
  GET_ALL_TRANSPORT,
  SET_PAGINATE_TRANSPORT,
  POST_TRANSPORT,
  PUT_TRANSPORT,
  DELETE_TRANSPORT,
} from "../types/transportType";
import { actionCreator } from "../../utils";

// G E T   A L L   T R A N S P O R T
export function deleteTransport(id){
  return{
    type: DELETE_TRANSPORT,
    id
  }
}

export function getAllTransport() {
  return {
    type: GET_ALL_TRANSPORT
  };
}

export function getAllTransportRes(payload) {
  return {
    type: actionCreator(GET_ALL_TRANSPORT, "res"),
    payload
  };
}

export function getAllTransportErr() {
  return {
    type: actionCreator(GET_ALL_TRANSPORT, "err")
  };
}


export function postTransport(payload) {
  return {
    type: POST_TRANSPORT,
    payload
  };
}

export function postTransportRes() {
  return {
    type: actionCreator(POST_TRANSPORT, "res")
  };
}

export function postTransportErr() {
  return {
    type: actionCreator(POST_TRANSPORT, "err")
  };
}