import {
  GET_ALL_TRANSPORT,
  SET_PAGINATE_TRANSPORT,
  POST_TRANSPORT,
  PUT_TRANSPORT
} from "../types/transportType";
import { actionCreator } from "../../utils";

const InitState = {
  data: null,
  loading: false,
  error: false,
  limit: 10,
  offset: 1,
  postData: {
    loading: false,
    error: false
  }
};

export default function(state = InitState, action) {
  switch (action.type) {
    case GET_ALL_TRANSPORT:
      return {
        ...state,
        loading: true
      };

    case actionCreator(GET_ALL_TRANSPORT, "res"):
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };

    case actionCreator(GET_ALL_TRANSPORT, "err"):
      return {
        ...state,
        loading: false,
        error: true,
        data: null
      };
      case POST_TRANSPORT:
        return {
          ...state,
          postData: {
            ...state.postData,
            loading: true,
            error: false
          }
        };
  
      case actionCreator(POST_TRANSPORT, "res"):
        return {
          ...state,
          postData: {
            ...state.postData,
            loading: false,
            error: false
          }
        };
  
      case actionCreator(POST_TRANSPORT, "err"):
        return {
          ...state,
          postData: {
            ...state.postData,
            loading: false,
            error: true
          }
        };
    default:
      return state;
  }
}
