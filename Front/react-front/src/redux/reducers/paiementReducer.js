import {
  GET_ALL_PAIEMENT,
  POST_PAIEMENT,
  DATA_EDIT_PAIEMENT,
  PUT_PAIEMENT,
  SEARCH_PAIEMENT
  
} from "../types/paiementType";
import { actionCreator } from "../../utils";

const initState = {
  data: null,
  loading: false,
  error: false,
  visible: false,
  paiements: [],
  postData: {
    loading: false,
    error: false
  },
  dataEditePaiement:{
    data:null,
    loading:false,
    error:false
  }
}

export default function (state = initState, action) {
  switch (action.type) {
    // R E D U C E R S   F O R  P A I E M E N T 
    case SEARCH_PAIEMENT:
      const {payload} = action;
      const paiements = state.data.filter((val) => val.idStudent.email.includes(payload));
      return {...state, payload, paiements};

    case DATA_EDIT_PAIEMENT:
      return{
        ...state,
        dataEditePaiement:{
          ...state.dataEditePaiement,
          data:action.payload
        }
      }
    case POST_PAIEMENT:
      return {
        ...state,
        postData: {
          ...state.postData,
          loading: true,
          error: false
        }
      };
    case actionCreator(POST_PAIEMENT, "res"):
      return {
        ...state,
        postData: {
          ...state.postData,
          loading: false,
          error: false
        }
      };
    case actionCreator(POST_PAIEMENT, "err"):
      return {
        ...state,
        postData: {
          ...state.postData,
          loading: false,
          error: true
        }
      };
    case GET_ALL_PAIEMENT:
      return {
        ...state,
        loading: true
      };
    case actionCreator(GET_ALL_PAIEMENT, "res"):
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    case actionCreator(GET_ALL_PAIEMENT, "err"):
      return {
        ...state,
        loading: false,
        error: true,
        dataNewPaiement: null
      };
      case PUT_PAIEMENT:
        return {
            ...state,
            dataEditePaiement: {
                ...state.dataEditePaiement,
                loading: true,
            }
        }
    case actionCreator(PUT_PAIEMENT, 'res'):
        return {
            ...state,
            dataEditePaiement: {
                ...state.dataEditePaiement,
                loading: false,
            }
        }
      default:
      return state;
    // R E D U C E R S   F O R  P A I E M E N T 
  }

}