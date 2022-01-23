import {
    GET_ALL_PAIEMENT,
    SEARCH_PAIEMENT,
    POST_PAIEMENT,
    PUT_PAIEMENT,
    DATA_EDIT_PAIEMENT,
    DELETE_PAIEMENT,
    PUT_VALIDATE_PAIEMENT
  } from "../types/paiementType";
  import { actionCreator } from "../../utils";
  
  // G E T   A L L   P A I E M E N T
  export function validationPaiement(payload){
    return{
      type:PUT_VALIDATE_PAIEMENT,
      payload
    }
  }
  export function search_Paiement(payload){
    return{
      type:SEARCH_PAIEMENT,
      payload
    }
  }
  export function deletePaiement(id){
    return{
      type: DELETE_PAIEMENT,
      id
    }
  }
  
  export function getAllPaiement() {
    return {
      type: GET_ALL_PAIEMENT
    };
  }
  
  export function getAllPaiementRes(payload) {
    return {
      type: actionCreator(GET_ALL_PAIEMENT, "res"),
      payload
    };
  }
  
  export function getAllPaiementErr() {
    return {
      type: actionCreator(GET_ALL_PAIEMENT, "err")
    };
  }
  
  
  export function postPaiement(payload) {
    return {
      type: POST_PAIEMENT,
      payload
    };
  }
  
  export function postPaiementRes() {
    return {
      type: actionCreator(POST_PAIEMENT, "res")
    };
  }
  
  export function postPaiementErr() {
    return {
      type: actionCreator(POST_PAIEMENT, "err")
    };
  }

  export function dataEditPaiement(payload) {
    return {
      type: DATA_EDIT_PAIEMENT,
      payload
    };
  }

  export function putPaiement(payload) {
    return {
        type: PUT_PAIEMENT,
        payload,
    }
  }
  
  export function putPaiementRes() {
    return {
        type: actionCreator(PUT_PAIEMENT, 'res')
    }
  }
  
  export function putPaiementErr() {
    return {
        type: actionCreator(PUT_PAIEMENT, 'err')
    }
  }
  