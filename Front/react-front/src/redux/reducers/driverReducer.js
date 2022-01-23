import {
  GET_DRIVER_DATA,
  SET_PAGINATE,
  POST_DRIVER,
  SEARCH_DRIVER
} from "./../types/driverType";
import { actionCreator } from "../../utils";

const iniState = {
  data: null,
  loading: false,
  error: false,
  limit: 10,
  offset: 1,
  drivrs:[],
  postData: {
    loading: false,
    error: false
  }
};

export default function(state = iniState, action) {
  switch (action.type) {
    case SEARCH_DRIVER: {
      const {payload} = action;
      const drivrs = state.data.result.filter((val) => val.cin.includes(payload));
      return {...state, payload, drivrs};
    }
    case GET_DRIVER_DATA:
      return {
        ...state,
        loading: true
      };
    case actionCreator(GET_DRIVER_DATA, "res"):
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false
      };
    case actionCreator(GET_DRIVER_DATA, "err"):
      return {
        ...state,
        loading: false,
        data: null,
        error: true
      };
    case SET_PAGINATE:
      return {
        ...state,
        offset: action.page
      };

    // P O S T   D R I V E R
    case POST_DRIVER:
      return {
        ...state,
        postData: {
          ...state.postData,
          loading: true,
          error: false
        }
      };

    case actionCreator(POST_DRIVER, "res"):
      return {
        ...state,
        postData: {
          ...state.postData,
          loading: false,
          error: false
        }
      };

    case actionCreator(POST_DRIVER, "err"):
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
